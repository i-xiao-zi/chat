import { App } from 'vue'
import {Captcha} from './lib/index.vue'

export default (app: App<Element>) => {
    app.component(Captcha.name, Captcha)
}