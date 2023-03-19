<script setup lang="ts">
  import {onLaunch, onShow, onHide } from "@dcloudio/uni-app"
  import './utils/ws'

  onLaunch(() => {
	  uni.login({
	  	complete(res) {
	  		console.log(res)
	  	}
	  })
	  uni.getUserProfile({
	  	complete(res) {
	  		console.log(res)
	  	}
	  })
  });
  onShow(() => {
  });
  onHide(() => {});
</script>

<style lang="scss" scoped>

</style>
