<template>
  <view class="bg-gray-100">
    <uni-nav-bar leftWidth="180rpx" rightWidth="180rpx" title="设置" statusBar fixed>
      <template #left>
        <view class="flex justify-between self-center border-1px rounded-full border-gray-200 border-solid p-5rpx">
          <uni-icons class="mx-14rpx self-center" size="22" type="back" @click="navBack" />
          <view class="self-center w-2rpx h-30rpx bg-gray-200" />
          <uni-icons class="mx-14rpx self-center" size="22" type="checkbox" @click="submit" />
        </view>
      </template>
    </uni-nav-bar>
    <uni-forms>
      <uni-list class="my-5px">
        <uni-list-item title="标题" :showArrow="false" click="">
          <template #footer>
            <uni-easyinput class="-my-18rpx" v-model="form.data.title" :inputBorder="false"
              :styles="{ borderColor: 'transparent', marginTop: '-10rpx' }" placeholder="请输入内容" />
          </template>
        </uni-list-item>
      </uni-list>
      <uni-list class="my-5px">
        <uni-list-item title="模型" :showArrow="false" @click="onClick($event, 1)">
          <template #footer>
            <uni-data-picker class="-my-18rpx" :border="false" placeholder="请选择模型" popup-title="请选择所在地区"
              :localdata="dataTree" :clear-icon="false" v-model="classes" @change="onchange" @nodeclick="onnodeclick"
              @popupopened="onpopupopened" @popupclosed="onpopupclosed" />
          </template>
        </uni-list-item>
        <uni-list-item title="温度">
          <template #footer>
            <uni-number-box class="-my-7rpx" v-model="form.data.temperature" :value="1" max="100" min="0" :step="1" />
          </template>
        </uni-list-item>
        <uni-list-item title="长度">
          <template #footer>
            <uni-number-box :value="1" v-model="form.data.max_tokens" max="100" min="0" :step="1" />
          </template>
        </uni-list-item>
        <uni-list-item title="Top P">
          <template #footer>
            <uni-number-box :value="1" v-model="form.data.top_p" max="100" min="0" :step="1" />
          </template>
        </uni-list-item>
        <uni-list-item title="Frequency penalty" to="/pages/vue/index/index" @click="onClick($event, 1)">
          <template #footer>
            <uni-number-box :value="1" max="100" min="0" :step="1" />
          </template>
        </uni-list-item>
        <uni-list-item title="Presence penalty" to="/pages/vue/index/index" @click="onClick($event, 1)">
          <template #footer>
            <uni-number-box :value="1" max="100" min="0" :step="1" />
          </template>
        </uni-list-item>
        <uni-list-item title="Best of" to="/pages/vue/index/index" @click="onClick($event, 1)" />
      </uni-list>
      <button v-if="props.id" @click="destory">删除</button>
    </uni-forms>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { v4 as uuid } from "uuid"
import { WS } from '../../utils/ws'
import { Message } from '../../types/ws';
const navBack = () => uni.navigateBack()
const props = defineProps({
  id: {
    type: Number,
    default: undefined
  }
})
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

const form = ref({
  data: {
    title: '',
    temperature: 0.7,
    max_tokens: 1024,
    top_p: 1,
  }
})

let message: Message
if (props.id) {
  message = {
    id: uuid().toString(),
    route: '/chat/setting/find',
    data: {
      id: props.id
    },
  }
  WS.getInstance().send(message)
  WS.getInstance().receive(message.route, (message: Message) => {
    form.value.data = message.data
    console.log(form.value.data)
  })
  const destory = () => {
    message = {
      id: uuid().toString(),
      route: '/chat/setting/destory',
      data: {
        id: props.id
      }
    }
    WS.getInstance().send(message)
    WS.getInstance().receive(message.route, (message: Message) => {
      form.value.data = message.data
      console.log(form.value.data)
    })
  }
}
const submit = () => {
  message = {
    id: uuid().toString(),
    route: '/chat/setting/save',
    data: form.value.data
  }
  WS.getInstance().send(message)
  WS.getInstance().receive(message.route, (message: Message) => {
    form.value.data = message.data
    console.log(form.value.data)
  })
}
</script>

<style lang="scss" scoped></style>
