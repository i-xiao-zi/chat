"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/user.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/home/detail.js";
  "./pages/home/setting.js";
  "./pages/user/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/App.vue"]]);
const createApp = () => {
  return {
    app: common_vendor.createSSRApp(App).use(store_index.store)
  };
};
createApp().app.mount("#app");
exports.createApp = createApp;
