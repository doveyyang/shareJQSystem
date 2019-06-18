<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true" >
			<block slot="backText"></block>
			<block slot="content">我的案例</block>
		</cu-custom>
		<view class="content-box ">
			<view class="case-box flex" v-for="(item,index) in caseList" :key="index">
				<view class="avatar">
					<view class="cu-avatar lg round " :style="'background-image:url('+head_img+')'"></view>
				</view>
				<view class="info flex flex-direction justify-around ">
					<view class="project">						
						<text class="name ">{{item.project_name}}</text>
						<text class="address margin-left">{{item.address}}</text>
					</view>
					<view class="date ">
						{{item.o_time}}
					</view>
				</view>
				<view class="btn-box flex flex-direction justify-around" @tap="showCaseDetail(item.o_id)">
					<text class="text-right text-blue">详情></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../../service.js';
	export default {
		data() {
			return {
				caseList:[],
				head_img:'/static/missing-face.png'
			}
		},
		onLoad(option) {
			if(option.id){
				this.id = option.id
				
			}
		},
		mounted() {
			if(this.id){
				this.initData();
			}
		},
		methods: {
			initData(){
				let self = this;			
				uni.request({
					url:service.BASEURL+'/home/share/case_list',
					method:"POST",
					data:{
						company:this.id
					},
					success(res) {
						console.log(res);
						if(!res.data || res.data.code != 1){
								uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							if(!res.data || res.data.code != 1){
									uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}else{
								self.caseList = res.data.data.list;
							}
						}
					},
					complete() {
						setTimeout(function() {uni.hideLoading()}, 1500);
					}
				})
			},
			showCaseDetail(id){
				uni.navigateTo({
					url:`../casedetail/casedetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		.content-box{
			width: 100%;
			border-top: 1upx solid #ccc;
			
			padding: 10upx 10upx;
			font-size: 24upx;
			
			color: #949494;
			
			// 案例列表
			.case-box{
				color: #949494;
				width: 100%;
				padding: 20upx;
				border-bottom: 1upx solid #ccc;
				.avatar{
					flex: 1;
				}
				
				.info{
					flex:4;
					overflow: hidden;
					.name{
						color: #2C94ED;
					}
					.date{
						margin-top: 10upx;
					}
				}
				.btn-box{
					flex:1;
				}
			}		
		}
	}
</style>
