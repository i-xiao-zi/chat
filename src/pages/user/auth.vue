<template>
  <view>
    <uni-nav-bar
      leftIcon="plus"
      title="快速登录" 
      statusBar
      @clickLeft="navAdd"
      fixed>
    </uni-nav-bar>
	<view class="fixed bottom-0">
		<view class="">
			<view class="rounded-t-10rpx bg-gray-100">
				<view class="">
					
				</view>
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">一键登录</button>
			</view>
		</view>	
	</view>
  </view>
</template>

<script lang="ts" setup>
	const getPhoneNumber = (res) => {
		console.log(res)
	}
</script>

<style lang="scss" scoped>

</style>
