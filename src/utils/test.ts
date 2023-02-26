import {inputNumberEmits} from "element-plus";

export const speed = async (domain: string): Promise<number, any> => {
  const image = new Image
  let time = new Date().valueOf()
  const promise = new Promise((resolve, reject) => {
    image.onload = () => resolve(new Date().valueOf() - time)
    image.onerror = () => reject('error')
  })
  image.src = `https://${domain}/favicon.ico?${time}`
  return promise
}

export const joinAddress = (...addresses: string[]) => addresses.filter(item => item).join(' / ')
