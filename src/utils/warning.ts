import {createApp} from 'vue'
import Warning from '../components/Warning.vue'
import ElementPlus from 'element-plus'
import {App, ComponentPublicInstance} from "@vue/runtime-core";

let Instance: App
let messages: any[] = []

export default (message: string, title: string, options: {}) => {
  messages = [...messages, {...options, message, title, _id: Math.random()}].filter(item => item)
  const mountNode = document.createElement('view')
  console.log({messages});
  if(messages.length >1) {
    messages.pop()
  }
  console.log({messages});

  Instance = createApp(Warning,  {...options, message, title}).use(ElementPlus)
  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}

export class Dialog {
  private static _messages: any[] = []
  private static _node: HTMLElement
  private static _instance: App
  constructor(message: string, title: string, options: {}) {
    if(Dialog._node == undefined) {
      Dialog._node = document.createElement('view')
      document.body.appendChild(Dialog._node)
    }
    Dialog._messages?.push({...options, message, title})
    Dialog._messages.length == 1 && this.show()
  }
  public static close(){
    Dialog._messages.shift()
  }
  private show() {
    Dialog._instance = createApp(Warning,  Dialog._messages[0]).use(ElementPlus)
    Dialog._instance.mount(Dialog._node)
  }
}

