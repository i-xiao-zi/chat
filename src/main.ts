import store from './store'
import { createSSRApp } from "vue"
import App from "./App.vue"
import Captcha from 'captcha'
// import './app.scss'
// import 'virtual:windi.css'

export const createApp = () => {
  return {
    app: createSSRApp(App)
      .use(store)
      .use(Captcha)
  }
}
