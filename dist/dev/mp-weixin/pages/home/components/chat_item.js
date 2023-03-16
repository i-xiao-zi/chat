"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "chat_item",
  props: {
    self: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !props.self
      }, !props.self ? {} : {}, {
        b: common_vendor.t(props.content),
        c: common_vendor.n(props.self ? "justify-end" : "justify-start"),
        d: props.self
      }, props.self ? {} : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/vue/chat/src/pages/home/components/chat_item.vue"]]);
wx.createComponent(Component);
