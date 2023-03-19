

uni.connectSocket({
	url: 'ws://127.0.0.1:8080',
	header: {
		'content-type': 'application/json'
	},
  protocols: ['protocol1'],
  method: 'GET',
  success: (res)=> {
    console.log({success: res});
    setTimeout(function(){
      uni.sendSocketMessage({
        data: 'xxxxxxxxxxxxxx'
      });
    }, 1000)
    },
  fail: (res)=> {console.log({fail: res})}
});

uni.onSocketOpen((res : UniNamespace.OnSocketOpenCallbackResult) => {
  console.log('WebSocket连接已打开！', res);
  uni.sendSocketMessage({
    data: 'xxxxxxxxxxxxxx'
  });
});// 
uni.onSocketMessage((res) => {
  console.log('onMessage', res)
  // uni.sendSocketMessage({
  //   data: 'xxxxxxxxxxxxxx'
  // });
})
//new WebSocket("wss://127.0.0.1:8443/v1", ['protocol1'])
uni.onSocketError((res : UniNamespace.GeneralCallbackResult) => {
  console.log('WebSocket连接打开失败，请检查！', res);
});

uni.onSocketClose((res : UniNamespace.GeneralCallbackResult) => {
  console.log('WebSocket 已关闭！', res);
});