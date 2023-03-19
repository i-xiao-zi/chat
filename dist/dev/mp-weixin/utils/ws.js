"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.index$1.connectSocket({
  url: "ws://127.0.0.1:8080",
  header: {
    "content-type": "application/json"
  },
  protocols: ["protocol1"],
  method: "GET",
  success: (res) => {
    console.log({ success: res });
    setTimeout(function() {
      common_vendor.index$1.sendSocketMessage({
        data: "xxxxxxxxxxxxxx"
      });
    }, 1e3);
  },
  fail: (res) => {
    console.log({ fail: res });
  }
});
common_vendor.index$1.onSocketOpen((res) => {
  console.log("WebSocket\u8FDE\u63A5\u5DF2\u6253\u5F00\uFF01", res);
  common_vendor.index$1.sendSocketMessage({
    data: "xxxxxxxxxxxxxx"
  });
});
common_vendor.index$1.onSocketMessage((res) => {
  console.log("onMessage", res);
});
common_vendor.index$1.onSocketError((res) => {
  console.log("WebSocket\u8FDE\u63A5\u6253\u5F00\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\uFF01", res);
});
common_vendor.index$1.onSocketClose((res) => {
  console.log("WebSocket \u5DF2\u5173\u95ED\uFF01", res);
});
