"use strict";
const common_vendor = require("../common/vendor.js");
require("./user.js");
require("./i18n.js");
require("./debugging.js");
require("./dialog.js");
const store = common_vendor.createPinia().use(common_vendor.index$1);
exports.store = store;
