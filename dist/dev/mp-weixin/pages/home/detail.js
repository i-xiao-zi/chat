"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2)();
}
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  setup(__props) {
    var FormData = require("form-data");
    console.log(FormData);
    const configuration = new common_vendor.dist.Configuration({
      apiKey: "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",
      baseOptions: {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        }
      }
    });
    console.log(configuration);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftIcon: "left",
          title: "\u804A\u5929xxx",
          statusBar: "true"
        }),
        b: common_vendor.p({
          isFull: true,
          border: "0",
          isShadow: false
        }),
        c: common_vendor.p({
          isFull: true,
          border: "0",
          isShadow: false
        }),
        d: common_vendor.p({
          isFull: true,
          border: "0",
          isShadow: false
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uniapp/chat/src/pages/home/detail.vue"]]);
wx.createPage(MiniProgramPage);
