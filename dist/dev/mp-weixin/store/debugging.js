"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.defineStore({
  id: "debugging",
  state: () => ({
    visible: false,
    debug: false,
    debug_domain: "http://www.baidu.com"
  }),
  getters: {},
  actions: {
    setVisible(status) {
      this.visible = status;
    },
    setDebug(status) {
      this.debug = status;
    },
    setDebugDomain(domain) {
      this.debug_domain = domain;
    }
  },
  persist: {
    enabled: true
  }
});
