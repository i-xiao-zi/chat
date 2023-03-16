<template>
  <view>
	<uni-nav-bar
      leftWidth="180rpx"
      rightWidth="180rpx"
      title="设置" 
      statusBar
      fixed>
      <template #left>
        <view class="flex justify-between self-center border-1px rounded-full border-gray-200 border-solid p-5rpx">
            <uni-icons class="mx-14rpx self-center" size="22" type="back" @click="navBack" />
            <view class="self-center w-2rpx h-30rpx bg-gray-200" />
            <uni-icons class="mx-14rpx self-center" size="22" type="gear" @click="navSetting" />
        </view>
      </template>
    </uni-nav-bar>
	  <view class='bg-gray-200 -my-44px h-screen'>
        
        <ChatItem :self="false" content="hello world" />
        <ChatItem :self="true" content="hello world"  />
        <ChatItem :self="false" content="hello world" />
        <ChatItem :self="true" content="hello world"  />
        <ChatItem :self="false" content="hello world" />
        <ChatItem :self="true" content="hello world"  />
        <ChatItem :self="false" content="hello world" />
        <ChatItem :self="true" content="hello world"  />
    </view>
    <view class="w-full bg-gray-100 fixed bottom-0">
      <view class="flex">
        <uni-icons type="sound" size="40"></uni-icons>
        <uni-easyinput 
          class="flex-auto" 
          trim="all" 
          model="value" 
          placeholder="请输入内容"
          confirmType="send"
          @input="input" />
      </view>
      <view style="height:env(safe-area-inset-bottom)"></view>
    </view>

  </view>
</template>

<script lang="ts" setup>
  import ChatItem from './components/chat_item.vue'
  
  const navBack = () => uni.navigateBack()
  const navSetting = () => uni.navigateTo({
    url: '/pages/home/setting'
  })
</script>

<style lang="scss" scoped>

</style>
