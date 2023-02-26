"use strict";
const common_vendor = require("../common/vendor.js");
const system_info = common_vendor.defineStore({
  id: "system_info",
  state: () => common_vendor.index.getSystemInfoSync(),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    enforceCustomStorage: false
  }
});
exports.system_info = system_info;
