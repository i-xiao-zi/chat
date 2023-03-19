"use strict";
const common_vendor = require("../common/vendor.js");
const goto = (url, animationType = "fade-in", animationDuration = 300, events = void 0) => new Promise(
  (resolve, reject) => url.endsWith("/index") || url == "/" ? common_vendor.index$1.switchTab({ url, success: (result) => resolve(result), fail: (result) => reject(result) }) : common_vendor.index$1.navigateTo({ url, animationType, animationDuration, events, success: (result) => resolve(result), fail: (result) => reject(result) })
);
exports.goto = goto;
