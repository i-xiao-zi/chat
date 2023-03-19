<script setup lang="ts">
  import {onLaunch, onShow, onHide } from "@dcloudio/uni-app"
  import { WS } from "./utils/ws"
  onLaunch(() => {
    WS.getInstance().connect()
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
