import request, {get, post} from '../utils/request'

export const getToken1 = () => get(`/api/s?wd=hello`, {})

export const getToken2 = () => post(`/api/qiniu/upload/token`, {})

