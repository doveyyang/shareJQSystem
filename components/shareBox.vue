<template>
	<view>
		<view class="margin-top padding-lg">
			<button class="bg-green text-white" @click="download">下载APP，加入净醛！</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			download(){
				uni.showToast({
					title:'下载APP.....'
				})
				// uni.
				// #ifdef H5
				window.location.href="http://jingquan.jingru88.com";
				// #endif
			}
		}
	}
</script>

<style>

</style>
