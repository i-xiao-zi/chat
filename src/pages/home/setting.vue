<template>
  <view class="bg-gray-100">
	  <uni-nav-bar 
      leftIcon="left" 
      title="设置" 
      statusBar="true"
      @clickLeft="navBack"
      fixed />
    <uni-list class="my-5px">
      <uni-list-item 
        title="标题"
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)">
        <template #footer>
          <uni-easyinput errorMessage v-model="value" focus placeholder="请输入内容" @input="input"/>
        </template>
      </uni-list-item>
    </uni-list>
    <uni-list class="my-5px">
      <uni-list-item 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        title="模型" 
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)">
        <template #footer>
          <uni-data-picker 
            class="border-0"
            placeholder="请选择班级" 
            popup-title="请选择所在地区" 
            :localdata="dataTree" 
            :clear-icon="false"
            v-model="classes"
          	@change="onchange" 
            @nodeclick="onnodeclick" 
            @popupopened="onpopupopened" 
            @popupclosed="onpopupclosed"/>
        </template>
      </uni-list-item>
      <uni-list-item 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        title="Temperature" 
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)" />
      <uni-list-item 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        title="Maximum length" 
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)" />
      <uni-list-item 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        title="reLaunch 方式跳转页面" 
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)" />
      <uni-list-item 
        thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        title="reLaunch 方式跳转页面" 
        link="reLaunch" 
        to="/pages/vue/index/index" 
        @click="onClick($event,1)" />
    </uni-list>
    <button plain>删除</button>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
  const navBack = () => uni.navigateBack()
  const classes = ref('1-2')
  const dataTree = ref([
    {
      text: "Complate",
      value: "Complate",
      children: [
        {
          text: "GTP3",
          value: "GTP3",
          children: [
            {
              text: "text-davinci-003",
              value: "text-davinci-003"
            },
            {
              text: "text-curie-001",
              value: "text-curie-001"
            },
            {
              text: "text-babbage-001",
              value: "text-babbage-001"
            },
          ]
        },
        {
          text: "CODEX",
          value: "CODEX",
          children: [
            {
              text: "code-davinci-002",
              value: "code-davinci-002"
            },
            {
              text: "code-davinci-001",
              value: "code-davinci-001"
            },
          ]
        },
      ]
    },
    {
      text: "Insert",
      value: "2-0",
      children: [{
        text: "2.1班",
        value: "2-1"
      },
      {
        text: "2.2班",
        value: "2-2"
      }]
    },
    {
      text: "Edit",
      value: "3-0",
      disable: true
    }
  ])
</script>

<style lang="scss" scoped>

</style>
