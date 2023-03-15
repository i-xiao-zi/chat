<template>
  <view
    class='mx-10px my-20px'
    >
    <view>
      <view class='text-center text-gray-400 my-10px text-12px'>2月27日 13:13</view>
    </view>
    <view class="flex">
      <view class="w-50px">
        <view v-if="!props.self" class='flex'>
          <image 
            class="w-40px h-40px"
            mode="aspectFit" 
            src='https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' />
          <view class='self-center'>
            <view class='w-0px h-0px border-5px border-solid border-transparent border-r-red-300'></view>
          </view>
        </view>
      </view>
      <view class='flex-auto flex' :class="props.self ? 'justify-end' : 'justify-start'">
        <view class='inline-block rounded-5px bg-red-300 p-8px break-all' >
          {{ props.content }}
        </view>
      </view>
      <view class="w-50px">
        <view v-if="props.self" class="flex">
          <view class="self-center">
            <view class='w-0px h-0px border-5px border-solid border-transparent border-l-red-300'></view>
          </view>
          <image
            class="w-40px h-40px"
            mode="aspectFit" 
            src='https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  const props = defineProps({
    self: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: '',
    },
    
  })
</script>

<style>
</style>