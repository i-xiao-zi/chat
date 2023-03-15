"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  (_easycom_uni_nav_bar2 + _easycom_uni_easyinput2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_data_picker2)();
}
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.js";
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const _easycom_uni_data_picker = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_easyinput + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_data_picker)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "setting",
  setup(__props) {
    const navBack = () => common_vendor.index$1.navigateBack();
    const classes = common_vendor.ref("1-2");
    const dataTree = common_vendor.ref([
      {
        text: "Complate",
        value: "Complate",
        children: [
          {
            text: "GTP3",
            value: "GTP3",
            children: [
              {
                text: "text-davinci-003",
                value: "text-davinci-003"
              },
              {
                text: "text-curie-001",
                value: "text-curie-001"
              },
              {
                text: "text-babbage-001",
                value: "text-babbage-001"
              }
            ]
          },
          {
            text: "CODEX",
            value: "CODEX",
            children: [
              {
                text: "code-davinci-002",
                value: "code-davinci-002"
              },
              {
                text: "code-davinci-001",
                value: "code-davinci-001"
              }
            ]
          }
        ]
      },
      {
        text: "Insert",
        value: "2-0",
        children: [
          {
            text: "2.1\u73ED",
            value: "2-1"
          },
          {
            text: "2.2\u73ED",
            value: "2-2"
          }
        ]
      },
      {
        text: "Edit",
        value: "3-0",
        disable: true
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navBack),
        b: common_vendor.p({
          leftIcon: "left",
          title: "\u8BBE\u7F6E",
          statusBar: "true",
          fixed: true
        }),
        c: common_vendor.o(_ctx.input),
        d: common_vendor.o(($event) => _ctx.value = $event),
        e: common_vendor.p({
          errorMessage: true,
          focus: true,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          modelValue: _ctx.value
        }),
        f: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        g: common_vendor.p({
          title: "\u6807\u9898",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        }),
        h: common_vendor.o(_ctx.onchange),
        i: common_vendor.o(_ctx.onnodeclick),
        j: common_vendor.o(_ctx.onpopupopened),
        k: common_vendor.o(_ctx.onpopupclosed),
        l: common_vendor.o(($event) => classes.value = $event),
        m: common_vendor.p({
          placeholder: "\u8BF7\u9009\u62E9\u73ED\u7EA7",
          ["popup-title"]: "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",
          localdata: dataTree.value,
          ["clear-icon"]: false,
          modelValue: classes.value
        }),
        n: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        o: common_vendor.p({
          thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          title: "\u6A21\u578B",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        }),
        p: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        q: common_vendor.p({
          thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          title: "Temperature",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        }),
        r: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        s: common_vendor.p({
          thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          title: "Maximum length",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        }),
        t: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        v: common_vendor.p({
          thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          title: "reLaunch \u65B9\u5F0F\u8DF3\u8F6C\u9875\u9762",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        }),
        w: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        x: common_vendor.p({
          thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          title: "reLaunch \u65B9\u5F0F\u8DF3\u8F6C\u9875\u9762",
          link: "reLaunch",
          to: "/pages/vue/index/index"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uniapp/chat/src/pages/home/setting.vue"]]);
wx.createPage(MiniProgramPage);
