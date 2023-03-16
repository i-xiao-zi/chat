"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar + ChatItem + _easycom_uni_easyinput)();
}
const ChatItem = () => "./components/chat_item.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  setup(__props) {
    const navBack = () => common_vendor.index$1.navigateBack();
    const navSetting = () => common_vendor.index$1.navigateTo({
      url: "/pages/home/setting"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navBack),
        b: common_vendor.p({
          size: "22",
          type: "back"
        }),
        c: common_vendor.o(navSetting),
        d: common_vendor.p({
          size: "22",
          type: "gear"
        }),
        e: common_vendor.p({
          leftWidth: "180rpx",
          rightWidth: "180rpx",
          title: "\u8BBE\u7F6E",
          statusBar: true,
          fixed: true
        }),
        f: common_vendor.p({
          self: false,
          content: "hello world"
        }),
        g: common_vendor.p({
          self: true,
          content: "hello world"
        }),
        h: common_vendor.p({
          self: false,
          content: "hello world"
        }),
        i: common_vendor.p({
          self: true,
          content: "hello world"
        }),
        j: common_vendor.p({
          self: false,
          content: "hello world"
        }),
        k: common_vendor.p({
          self: true,
          content: "hello world"
        }),
        l: common_vendor.p({
          self: false,
          content: "hello world"
        }),
        m: common_vendor.p({
          self: true,
          content: "hello world"
        }),
        n: common_vendor.p({
          type: "sound",
          size: "40"
        }),
        o: common_vendor.o(_ctx.input),
        p: common_vendor.p({
          trim: "all",
          model: "value",
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          confirmType: "send"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/pages/home/detail.vue"]]);
wx.createPage(MiniProgramPage);
