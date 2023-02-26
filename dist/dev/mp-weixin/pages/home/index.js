"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_nav_bar2 + _easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_list_chat = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_list_chat + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "\u804A\u5929",
      statusBar: "true"
    }),
    b: common_vendor.p({
      title: "xxx",
      note: "note",
      badgeText: "3",
      to: "/pages/home/detail"
    }),
    c: common_vendor.p({
      title: "xxx",
      note: "note",
      badgeText: "3"
    }),
    d: common_vendor.p({
      title: "xxx",
      note: "note",
      badgeText: "3"
    }),
    e: common_vendor.p({
      title: "xxx",
      note: "note",
      badgeText: "3"
    }),
    f: common_vendor.p({
      title: "xxx",
      note: "note",
      badgeText: "3"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/uniapp/chat/src/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
