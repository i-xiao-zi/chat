import { defineConfig } from 'windicss/helpers'
import windiHeaderPlugin from './windi.header.plugin'
import windiUniPlugin from './windi.uni.plugin'
import system_info from "./src/store/system_info";

export default defineConfig({
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
