"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "auth",
  setup(__props) {
    const getPhoneNumber = (res) => {
      console.log(res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.navAdd),
        b: common_vendor.p({
          leftIcon: "plus",
          title: "\u5FEB\u901F\u767B\u5F55",
          statusBar: true,
          fixed: true
        }),
        c: common_vendor.o(getPhoneNumber)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/pages/user/auth.vue"]]);
wx.createPage(MiniProgramPage);
