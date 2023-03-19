<script setup lang="ts">
  import {onLaunch, onShow, onHide } from "@dcloudio/uni-app"
  import { WS } from "./utils/ws"
  onLaunch(() => {
    WS.getInstance().connect()
  });
  onShow(() => {
  });
  onHide(() => {});
</script>

<style lang="scss" scoped>

</style>
