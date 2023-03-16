"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_card2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_card = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "\u6211\u7684\u6536\u85CF"
    }),
    b: common_vendor.p({
      title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
      thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      rightText: "\u53F3\u4FA7\u6587\u5B57",
      clickable: true,
      link: true
    }),
    c: common_vendor.p({
      title: "\u5173\u4E8E",
      thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      clickable: true,
      link: true
    }),
    d: common_vendor.p({
      title: "\u5E2E\u52A9",
      thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      clickable: true,
      link: true
    }),
    e: common_vendor.p({
      title: "\u8BBE\u7F6E",
      thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      clickable: true,
      link: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/vue/chat/src/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
