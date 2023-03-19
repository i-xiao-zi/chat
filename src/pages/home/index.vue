<template>
  <view>
	<uni-nav-bar
      leftIcon="plus"
      title="设置" 
      statusBar
      @clickLeft="navAdd"
      fixed>
    </uni-nav-bar>
    <uni-search-bar placeholder="自定placeholder" @confirm="search" />
    <uni-list>
      <uni-list-chat 
        v-for='(_, i) in [1,2,3]' 
        :key='i'
        title="uni-app" 
        avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" 
        note="您收到一条新的消息" 
        time="2020-02-02 20:20" 
        badge-text="12"
        to='/pages/home/detail'/>
    </uni-list>
  </view>
</template>

<script lang="ts" setup>
  import { Message } from '../../types/ws'
  import { WS } from '../../utils/ws'
  import '../../utils/ws.ts'
  const navAdd = () => uni.navigateTo({
    url: '/pages/home/setting'
  })
  WS.getInstance().receive('/text', (message: Message) => {
    console.log('xxxxxxxxxxxxxxxxxxx', message)
  })
  
</script>

<style lang="scss" scoped>

</style>
