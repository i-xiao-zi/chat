"use strict";
const locale_zhCN_index = require("./zh-CN/index.js");
const locale_enUS_index = require("./en-US/index.js");
const messages = {
  "zh-CN": locale_zhCN_index.zhCN,
  "en-US": locale_enUS_index.enUS
};
exports.messages = messages;
