import store, {debugging} from '../store'
import ajax, {AjaxRequestConfig, AjaxResponse} from 'uni-ajax'

const instance = ajax.create({
  baseURL: 'https://google.com',
  timeout: 5000,
  headers: {},
})

instance.interceptors.request.use(
  (config: AjaxRequestConfig) => {
    if(debugging().debug) {
      config = {
        ...config,
        baseURL: debugging().debug_domain,
        timeout: 0,
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AjaxResponse) => {
    if(response.statusCode == 200) {
      return response.data
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

const {get, post, head } = instance

export default instance
export {get, post, head}
