<template>
  <view>
    <view class="flex px-10px py-20px pt-80px" style="background: url('/static/images/bg.jpg') no-repeat;">
      <image
        class="w-40px h-40px rounded-full mx-5px"
        mode="aspectFit" 
        src='https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' />
        <view class="self-center mx-5px">张三</view>
    </view>
    <uni-card title="我的收藏">
      <view class="grid grid-cols-4">
        <view>a</view>
        <view>b</view>
        <view>c</view>
        <view>d</view>
      </view>
    </uni-card>
	  <uni-list>
	   	<uni-list-item 
        title="列表左侧带略缩图" 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        rightText="右侧文字"
        clickable
        link />
      <uni-list-item
        title="关于" 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        clickable
        link />
	   	<uni-list-item 
        title="帮助" 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        clickable
        link />
	   	<uni-list-item 
        title="设置" 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        clickable
        link />
        
	  </uni-list>
  </view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
