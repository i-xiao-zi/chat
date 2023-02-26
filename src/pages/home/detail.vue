<template>
  <view>
	  <uni-nav-bar leftIcon="left" title="聊天xxx" statusBar="true" />
	  <uni-card isFull border="0" :isShadow="false">
		  xxx
	  </uni-card>
	  <uni-card isFull border="0" :isShadow="false">
		  xxx
	  </uni-card>
	  <uni-card isFull border="0" :isShadow="false">
		  xxx
	  </uni-card>
  </view>
</template>

<script lang="ts" setup>
	import { Configuration, OpenAIApi } from 'openai'
  var FormData = require('form-data');
  console.log(FormData)
	const configuration = new Configuration({
	  apiKey: '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',
	  baseOptions: {
		  headers: {
			  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
		  }
	  },
    // formDataCtor: FormData
	});
	console.log(configuration)
	// const openai = new OpenAIApi(configuration);
	
	// const completion = await openai.createCompletion({
	//   model: "text-davinci-003",
	//   prompt: "Hello world",
	// });
	// console.log(completion.data.choices[0].text);

</script>

<style lang="scss" scoped>

</style>
