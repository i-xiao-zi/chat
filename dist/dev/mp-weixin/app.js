"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const store_system_info = require("./store/system_info.js");
const locale_index = require("./locale/index.js");
const store_i18n = require("./store/i18n.js");
require("./store/user.js");
require("./store/debugging.js");
require("./store/dialog.js");
require("./locale/zh-CN/index.js");
require("./locale/zh-CN/home.js");
require("./locale/zh-CN/ucenter.js");
require("./locale/zh-CN/weal.js");
require("./locale/en-US/index.js");
require("./locale/en-US/home.js");
require("./locale/en-US/weal.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/home/detail.js";
  "./pages/chat/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
    });
    common_vendor.onShow(() => {
      console.log(store_system_info.system_info());
    });
    common_vendor.onHide(() => {
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uniapp/chat/src/App.vue"]]);
const createApp = () => {
  return {
    app: common_vendor.createSSRApp(App).use(store_index.store).use(common_vendor.createI18n({
      locale: store_i18n.i18n().getLang(),
      messages: locale_index.messages
    }))
  };
};
createApp().app.mount("#app");
exports.createApp = createApp;
