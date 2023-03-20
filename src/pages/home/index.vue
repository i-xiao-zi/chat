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
        v-for='(chat, index) in chats' 
        :key='index'
        :title="chat.title" 
        avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" 
        :note="chat.model" 
        time="2020-02-02 20:20"
        badge-text="12"
        :to='`/pages/home/detail?id=${chat.id}`'/>
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
  import { v4 as uuid } from "uuid"
  import { ref } from "vue"
  import { Message } from '../../types/ws'
  import { WS } from '../../utils/ws'
  import '../../utils/ws.ts'
  
  const chats = ref([])
  const navAdd = () => uni.navigateTo({
    url: '/pages/home/setting'
  })
  let message: Message = {
	  id: uuid().toString(),
	  route: '/chat/list',
	  data: {
		  page_size: 20
	  },
  }
  WS.getInstance().send(message)
  WS.getInstance().receive(message.route, (message: Message) => {
    chats.value = message.data
	console.log(chats.value)
  })
  
</script>

<style lang="scss" scoped>

</style>
