"use strict";
const common_vendor = require("../common/vendor.js");
const defaultDialog = () => {
  return {
    id: common_vendor.v4().toString(),
    title: "",
    content: "",
    actions: [],
    period: 1,
    start_at: new Date().valueOf(),
    next_at: 0,
    end_at: new Date().valueOf() + 86400 * 30 * 1e3
  };
};
common_vendor.defineStore({
  id: "dialog",
  state: () => ({
    queue: []
  }),
  getters: {},
  actions: {
    create(dialog) {
      console.log({ dialog });
      const id = common_vendor.v4().toString();
      let queue = common_vendor._.cloneDeep(this.queue);
      queue.push({
        ...defaultDialog(),
        ...dialog
      });
      this.queue = queue;
      return id;
    },
    close() {
      console.log("close");
      this.$patch((state) => {
        state.current = void 0;
      });
    },
    open() {
      console.log("---1------", this.current);
      const now = new Date().valueOf();
      let queue = [];
      let current = void 0;
      let found = false;
      console.log("---2------");
      JSON.parse(JSON.stringify(this.queue)).map((dialog, index) => {
        let item = common_vendor._.cloneDeep(dialog);
        let should_delete = false;
        if (!found) {
          if (item.start_at <= now && item.end_at > now) {
            found = true;
            current = common_vendor._.cloneDeep(dialog);
            item.start_at = now;
            if (item.period > 1) {
              item.period > 1 && item.period--;
            } else {
              should_delete = true;
            }
          }
        } else {
          if (item.end_at < now) {
            should_delete = true;
          }
        }
        should_delete || queue.push(item);
      });
      this.$patch((state) => {
        state.current = current;
        state.queue = queue;
      });
      return current;
    },
    delete(id) {
      common_vendor._.findIndex(this.queue, { id });
    }
  },
  persist: {
    enabled: true
  }
});
