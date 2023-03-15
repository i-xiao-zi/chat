import store from './store'
import { createSSRApp } from "vue"
import App from "./App.vue"
import './app.scss'
import 'virtual:windi.css'

export const createApp = () => {
  return {
    app: createSSRApp(App)
      .use(store)
  }
}
