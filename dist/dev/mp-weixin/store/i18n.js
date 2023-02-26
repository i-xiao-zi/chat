"use strict";
const common_vendor = require("../common/vendor.js");
const locale_index = require("../locale/index.js");
const i18n = common_vendor.defineStore({
  id: "i18n",
  state: () => ({
    lang: ""
  }),
  getters: {},
  actions: {
    getLang() {
      console.log({ lang: this.lang, locale: { ...locale_index.messages } });
      if (this.lang.length === 0) {
        common_vendor.index.getSystemInfo({
          success: (systemInfo) => {
            let lang = "zh-CN";
            const language = systemInfo.osLanguage ? systemInfo.osLanguage : systemInfo.appLanguage ? systemInfo.appLanguage : systemInfo.language ? systemInfo.language : "";
            if (Object.keys(locale_index.messages).indexOf(language) > -1) {
              lang = language;
            } else {
              Object.keys(locale_index.messages).forEach((key) => {
                if (key.substring(0, key.indexOf("-")) == language.substring(0, key.indexOf("-"))) {
                  lang = key;
                  return false;
                }
              });
            }
            systemInfo.language && this.setLang(lang);
          }
        });
      }
      return this.lang;
    },
    setLang(lang) {
      if (this.lang != lang) {
        this.lang = lang;
        common_vendor.index.setLocale(this.lang);
        getCurrentPages();
      }
    }
  },
  persist: {
    enabled: true
  }
});
exports.i18n = i18n;
