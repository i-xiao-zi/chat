"use strict";
const common_vendor = require("../common/vendor.js");
require("./user.js");
const store = common_vendor.createPinia().use(common_vendor.index);
exports.store = store;
