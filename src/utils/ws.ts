import EventEmitter from 'events'
import { Message } from "../types/ws"

export class WS extends EventEmitter {
  private static instance: WS
  
  /**
   * 重连次数，-1时表示已连接
   */
  private attempt: number = 0
  /**
   * 单例
   */
  private intervals: NodeJS.Timer[] = []
  public static getInstance(attempt: number = 5) {
    if (WS.instance == undefined){
      WS.instance = new WS()
      WS.instance.attempt = attempt
      
      // 连接成功
      uni.onSocketOpen((res : UniNamespace.OnSocketOpenCallbackResult) => {
        console.log('WebSocket连接已打开！', res)
      })
      
      // 接收消息
      uni.onSocketMessage((result: UniNamespace.OnSocketMessageCallbackResult) => {
        let message: Message = JSON.parse(result.data)
        WS.instance.emit(message.route, message)
      })
      
      // 连接失败 触发重连
      uni.onSocketError((res : UniNamespace.GeneralCallbackResult) => WS.instance.reconnect(attempt, res.errMsg))
      
      // 连接关闭
      uni.onSocketClose((res : UniNamespace.GeneralCallbackResult) => WS.instance.reconnect(attempt, res.errMsg))
    }
    return WS.instance
  }
  /**
   * 发送
   * 发送失败 重试3次
   */
  public send(message: Message): boolean {
    if (this.attempt > -1 ) {
      return false
    }
    let attempt = 3
    let status = false
    while (attempt > -1 ) {
      uni.sendSocketMessage({
        data: JSON.stringify(message),
        success: () => {
          attempt = 0
          status = true
        },
        complete: () => attempt--,
      })
    }
    return status
  }
  /**
   * 接收
   */
  public receive(route: string, listener: (message: Message) => void) {
    this.on(route, listener)
  }
  /**
   * 连接
   */
  public connect() {
    this.attempt > -1 && uni.connectSocket({
    	url: 'ws://127.0.0.1:8443',
    	header: {
    		'content-type': 'application/json'
    	},
      method: 'GET',
      success: ()=> this.attempt = 0,
      complete: ()=> this.attempt--,
    })
  }
  /**
   * 重连
   */
  private reconnect(attempt: number, err: string) {
    this.attempt = attempt
    this.connect()
    while (WS.instance.attempt > -1) setTimeout(this.connect, 5000)
    this.attempt === -1 && uni.showToast({icon: 'error',title: err})
  }
}
