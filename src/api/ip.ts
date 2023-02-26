import request, {get, head, post} from '../utils/request'
import {AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
  baseURL: '',
  timeout: 0,
}

export const speed = async (url: string): Promise<number> => {
  const time = new Date()
  await get(`https://${domain}/favicon.ico?${time}`, config).then()
  // @ts-ignore
  return new Date() - time
}

export const ip = (url: string) => get(url, {baseURL: ''})


