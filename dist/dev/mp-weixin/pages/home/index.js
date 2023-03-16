"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_nav_bar2 + _easycom_uni_search_bar2 + _easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_chat = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_search_bar + _easycom_uni_list_chat + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const navAdd = () => common_vendor.index$1.navigateTo({
      url: "/pages/home/setting"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navAdd),
        b: common_vendor.p({
          leftIcon: "plus",
          title: "\u8BBE\u7F6E",
          statusBar: true,
          fixed: true
        }),
        c: common_vendor.o(_ctx.search),
        d: common_vendor.p({
          placeholder: "\u81EA\u5B9Aplaceholder"
        }),
        e: common_vendor.f([1, 2, 3], (_, i, i0) => {
          return {
            a: i,
            b: "656cd499-3-" + i0 + ",656cd499-2"
          };
        }),
        f: common_vendor.p({
          title: "uni-app",
          avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-text"]: "12",
          to: "/pages/home/detail"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
