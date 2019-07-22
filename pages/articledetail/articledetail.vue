<template>
	<view class="root">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">{{info.title}}</block>
			
		</cu-custom>
		<view class="padding-sm text-white" v-if="info">
			<!-- <view class="uni-title">这是选项卡页面跳转详情页面的演示，下面是页面跳转时传递过来的标题：</view> -->
			<view class="text-lg text-left text-white">{{info.title}}</view>
			<view class="flex text-sm text-grey margin-top">
				<view class="text-right">					
					<text class="cuIcon-time "></text> {{info.update_time}}
				</view>
				<view class="text-left">
					<text class="cuIcon-comment margin-left"></text>{{info.views}}
				</view>
				
				 
			</view>
			
			<view class="margin-top">
				<rich-text :nodes="info.content"></rich-text>
			</view>
			<view class="padding-sm">
				<image :src="info.photo" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="padding-sm text-white" @tap="updateinfo(info.last_id)">
			上一篇：<text :class="{'updatetext':info.last_id!='#'}" >{{info.last}}</text>
			
		</view>
		<view class="padding-sm text-white" @tap="updateinfo(info.next_id)">
			下一篇：<text :class="{'updatetext':info.next_id!='#'}" >{{info.next}}</text>
		</view>
		<sharebtn></sharebtn>
		<view class="margin-top padding-lg"></view>
	</view>
</template>
<script>
	import service from '../../service.js';
	import sharebtn from '../../components/shareBox.vue';
	export default {
		data() {
			return {
				info:{
					"id": 68,
					"title": "-",
					"cate_id": 2,
					"photo": "http://booking.jingru88.com/uploads/face//uploads/images/20190614\\1c44e478eb7d476cde1c6b57c642c4d5.jpg",
					"remark": "5254",
					"keyword": "242424",
					"content": "<p><br/></p><p>2145254254254</p>",
					"views": 1,
					"status": 1,
					"type": 1,
					"is_tui": 1,
					"from": "",
					"writer": "",
					"ip": "",
					"create_time": "2017-08-24 18:11:12",
					"update_time": "2019-06-15 18:02:54",
					"name": "生活随笔",
					"last": "没有了",
					"last_id": "#",
					"next": "太难",
					"next_id": 67
				},
				id:-1,
			}
		},
		components:{
			sharebtn
		},
		onLoad(option) {
			if(option.id){
				this.id = option.id
			}else{
				uni.showToast({
					title:'分享数据过期，请重新分享'
				})
			}
		},
		mounted() {
			let self = this;
			uni.request({
				url:service.BASEURL+'/home/index/getArticleinfo',
				method:"POST",
				data:{
					id:this.id
				},
				success(res) {
					if(res.data.code == 1){
						self.info = res.data.data;
					}else{
						uni.showToast({
							title:res.data.msg
						})
					}
				}
			})
		},
		methods:{
			updateinfo(id){
				uni.showLoading({})
				let self = this;
				if(id!='#'){
					uni.request({
						url:service.BASEURL+'/home/index/getArticleinfo',
						method:"POST",
						data:{
							id:id
						},
						success(res) {
							if(res.data.code == 1){
								if(res.data.data){
									self.info = res.data.data;
									uni.pageScrollTo({
										scrollTop: 0,
										duration: 300
									});
								}else{
									uni.showToast({
										title:'没有更多啦',
										icon:'none'
									})
								}
									
								
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}
						},
						complete() {
							setTimeout(function(){
								uni.hideLoading()
							},1000);
						}
					})
				}
			}
		}
	}
</script>
<style>
	.root{
		background-color: #000000;
		width: 100%;
	}
	.updatetext{
		text-decoration: underline;
	}
</style>
