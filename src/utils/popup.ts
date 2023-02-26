import {createApp} from 'vue'
import Popup from '../components/popup.vue'
import {App} from "@vue/runtime-core";
import store, {i18n} from "../store";
import {createI18n} from "vue-i18n";
import messages from '../locale'
let Instance: App
let messages: any[] = []

export default (message: string, title: string, options: {}) => {
  const mountNode = document.createElement('view')
  console.log({messages});
  if(messages.length >1) {
    messages.pop()
  }
  Instance = createApp(Popup,  {...options, message, title})
    .use(store)
    .use(createI18n({
      locale: i18n().getLang(),
      messages,
    }))
  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}
