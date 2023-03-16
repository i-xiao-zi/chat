"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2 + _easycom_uni_easyinput2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_data_picker2 + _easycom_uni_number_box2)();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.js";
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const _easycom_uni_data_picker = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.js";
const _easycom_uni_number_box = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar + _easycom_uni_easyinput + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_data_picker + _easycom_uni_number_box)();
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
          size: "22",
          type: "back"
        }),
        c: common_vendor.o(_ctx.navSetting),
        d: common_vendor.p({
          size: "22",
          type: "checkbox"
        }),
        e: common_vendor.p({
          leftWidth: "180rpx",
          rightWidth: "180rpx",
          title: "\u8BBE\u7F6E",
          statusBar: true,
          fixed: true
        }),
        f: common_vendor.o(_ctx.input),
        g: common_vendor.o(($event) => _ctx.value = $event),
        h: common_vendor.p({
          inputBorder: false,
          styles: {
            borderColor: "transparent",
            marginTop: "-10rpx"
          },
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          errorMessage: true,
          focus: true,
          modelValue: _ctx.value
        }),
        i: common_vendor.p({
          title: "\u6807\u9898",
          showArrow: false,
          click: ""
        }),
        j: common_vendor.o(_ctx.onchange),
        k: common_vendor.o(_ctx.onnodeclick),
        l: common_vendor.o(_ctx.onpopupopened),
        m: common_vendor.o(_ctx.onpopupclosed),
        n: common_vendor.o(($event) => classes.value = $event),
        o: common_vendor.p({
          border: false,
          placeholder: "\u8BF7\u9009\u62E9\u6A21\u578B",
          ["popup-title"]: "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",
          localdata: dataTree.value,
          ["clear-icon"]: false,
          modelValue: classes.value
        }),
        p: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        q: common_vendor.p({
          title: "\u6A21\u578B",
          showArrow: false
        }),
        r: common_vendor.p({
          value: 1,
          max: "100",
          min: "0",
          step: 1
        }),
        s: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        t: common_vendor.p({
          title: "\u6E29\u5EA6",
          to: "/pages/vue/index/index"
        }),
        v: common_vendor.p({
          value: 1,
          max: "100",
          min: "0",
          step: 1
        }),
        w: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        x: common_vendor.p({
          title: "\u957F\u5EA6",
          to: "/pages/vue/index/index"
        }),
        y: common_vendor.p({
          value: 1,
          max: "100",
          min: "0",
          step: 1
        }),
        z: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        A: common_vendor.p({
          title: "Top P",
          to: "/pages/vue/index/index"
        }),
        B: common_vendor.p({
          value: 1,
          max: "100",
          min: "0",
          step: 1
        }),
        C: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        D: common_vendor.p({
          title: "Frequency penalty",
          to: "/pages/vue/index/index"
        }),
        E: common_vendor.p({
          value: 1,
          max: "100",
          min: "0",
          step: 1
        }),
        F: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        G: common_vendor.p({
          title: "Presence penalty",
          to: "/pages/vue/index/index"
        }),
        H: common_vendor.o(($event) => _ctx.onClick($event, 1)),
        I: common_vendor.p({
          title: "Best of",
          to: "/pages/vue/index/index"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/pages/home/setting.vue"]]);
wx.createPage(MiniProgramPage);
