import { defineConfig } from 'windicss/helpers'
import windiHeaderPlugin from './windi.header.plugin'
import windiUniPlugin from './windi.uni.plugin'

export default defineConfig({
  preflight: false,
  prefixer: false,
  extract: {
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist']
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false
  },
  plugins: [
    windiHeaderPlugin,windiUniPlugin
  ],
  theme: {
    extend: {
      colors:{
	  }
    }
  }
})
