<template>
	<view class="mine-container">
		<cu-custom :isBack="true"><block slot="backText"></block>
			<block slot="content">公司详情</block>
		</cu-custom>	
		<!-- 头部显示 -->		
		<view class="avertar-box"  :style="'background:url('+backgroundImage+') no-repeat'">
			<!-- 登录用户 -->
			<view class="info-box">
				<view class="avatar-info">
					<view class="cu-avatar xl round avatar" :style="'background-image:url('+head_img+')'"></view>
					<view class="point-box">
						<text class="point">
							醛值 {{quan_num}}
						</text>
					</view>
					<view class="username">
						{{username}}
					</view>
					<view class="phone">
						<text class="iconfont cuIcon-phone"></text>
						{{phone}}
					</view>
				</view>
			</view>			
		</view>
		
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text>
				<text class="text-xl text-bold">企业介绍</text>
			</view>
		</view>
		<view class="content-box">
			{{content}}
		</view>
		
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text>
				<text class="text-xl text-bold">企业形象</text>
			</view>		
			
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub" v-if="corporateList.length>0">
				<view class="padding-xs bg-img" :style="[{backgroundImage:'url(' + corporateList[index] +')'}]" v-for="(item,index) in corporateList"
				 :key="index" @tap="ViewCorporateImage" :data-url="corporateList[index]">
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text>
				<text class="text-xl text-bold">企业资质</text>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="padding-xs bg-img" :style="[{backgroundImage:'url(' + aptitudeList[index] +')'}]" v-for="(item,index) in aptitudeList"
				 :key="index" @tap="ViewAptitudeListImage" :data-url="aptitudeList[index]">
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text>
				<text class="text-xl text-bold">最新案例</text>
			</view>
			<view class="operator padding-sm ">
				<view class="cu-item " @tap="showMoreCase">
					<text class="text-blue text-sm"> 查看更多 </text>
				</view> 				
			</view>
		</view>
		<view class="content-box ">
			<view class="case-box flex margin-top" v-for="(item,index) in caseList" :key="index">
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
		
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text>
				<text class="text-xl text-bold">企业地址</text>
			</view>			
		</view>
		<view class="content-box">
			<view class="address padding-sm">				
				<text class="iconfont text-blue cuIcon-locationfill"></text>
				
				<text class="addressinfo ">{{addressurl}}</text>				
			</view>
			<view class="map-box">
				<map style="width: 100%; height: 150px;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
			</view>
		</view>
		
		<sharebtn></sharebtn>
	</view>
</template>

<script>
	import service from '../../service.js';
	import sharebtn from '../../components/shareBox.vue';
	export default {
		data() {
			return {
				id:'',
				username:'',
				phone:'',
				sex:'',
				quan_num:0,
				head_img:'',
				imgList: [],
				corporateList:[], 	//企业形象
				aptitudeList:[],	// 资质证书
				logoList:[],		// logo
				picSize:10, 		// 照片的最大张数
				addressurl:"",
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				content:'',
				BASEURL:'',
				backgroundImage:'http://lost.jade2707.top/static/home/images/mine/bg.jpg',
				caseList:[],
			};
		},
		components:{
			sharebtn
		},
		onLoad(option) {			
			if(option.id){
				this.id = option.id;
			}else{
				uni.showToast({
					title:'分享已过期，请重试',
					icon:'none'
				})
			}
		},
		mounted(){
			
			let self = this;
			this.BASEURL = service.BASEURL;
			
			console.log('hasLogin',this.hasLogin);
				// 获取用户信息 保存到vuex中
				uni.showLoading({
					
				})
				uni.request({
					url:service.BASEURL+'/home/share/ditails',
					method:"POST",
					data:{
						id:this.id
					},
					success(res) {
						console.log(res);
						if(!res.data || res.data.code != 1){
								uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							let info = res.data.data;
							
							self.username = info.name;
							self.phone = info.mobile;
							self.content = info.content;
							self.quan_num = info.quan_num;
							if(info.head_img){
								self.head_img =service.BASEURL+ info.head_img;
							}
							
							if(info.corporate){
								self.corporateList = info.corporate.map(e=>(service.BASEURL+e.url))
								// 更换背景图片
								self.backgroundImage = self.corporateList[0];
							}
							
							if(info.aptitude){
								self.aptitudeList = info.aptitude.map(e=>(service.BASEURL+e.url))
							}
							self.addressurl = info.addressurl;
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
				
				let data2 = {};
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
							self.caseList = res.data.data.list;
						}
					}
				})
		},
		methods: {
			gotoURL(url) {
				uni.redirectTo({					
					url:url
				})
			},
			gotoURLWithNav(url){
				
			},
			showCaseDetail(id){
				
				uni.navigateTo({
					url:`./casedetail/casedetail?id=${id}`
				})
			},
			showMoreCase(){
				// 查看更多案例
				console.log('showMoreCase')
				uni.navigateTo({
					url:`./caselist/caselist?id=${this.id}`
				});
			},
			editcompanyinfo(){
				console.log('editcompanyinfo')				
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			ViewCorporateImage(e){
				uni.previewImage({
					urls: this.corporateList,
					current: e.currentTarget.dataset.url
				});
			},
			ViewAptitudeListImage(e){
				uni.previewImage({
					urls: this.aptitudeList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除图片吗？',
					cancelText: '返回',
					confirmText: '删掉',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			ChooseImage() {
				let self = this;
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res1) => {
						const tempFilePaths = res1.tempFilePaths;
						if (self.imgList.length != 0) {
							self.imgList = self.imgList.concat(res1.tempFilePaths)
						} else {
							self.imgList = res1.tempFilePaths
						}
					}
				});
			},
		},
	}
</script>

<style lang="scss">
.mine-container{
	position: relative;
	width: 100%;
	background-color: #fff;
	
	
	.avertar-box{
		// background: url('http://lost.jade2707.top/static/home/images/mine/bg.jpg') no-repeat center;
		background-size: 100% 100%;
		
		// background-color: #2C94ED;
		// border: 1px solid red;
		height: 576upx;
		display: flex;
		width: 100%;
		color: #FFFFFF;
		
		.info-box{
			background-color: rgba(23,146,233,0.8);
			border-radius:0 0 100upx 100upx;
			overflow: hidden;
			width: 100%;
			height: 100%;
			
			margin:auto;
			.avatar-info{
				// align: center;
				// border: 1px solid pink;
				margin-top: 100upx;
				font-size: 32upx;
				// padding: 0 auto;
				// display: block;
				.avatar{
					margin:auto;
					display: block;
					padding: 0 auto;
					// border: 1px solid purple;
				}
				.username{
					// font-size: 25upx;
					line-height: 70upx;
					// text-indent: 0.5em;
					font-weight: 700;
					text-align: center;
					.msex{
						margin-left:20upx;
						color: #FF29FF;
						display: inline;
					}
				}
				.point-box{
					text-align: center;
					margin-top: 20upx;
					.point{
						
						padding:10upx;
						// width: 
						border: 1upx solid white;
						border-radius: 1em;
						text-align: center;
					}
				}
				
				.phone{
					// font-size: 14px;
					font-size: 28upx;
					text-align: center;
					.picon{
						font-size: 24upx;
					}
				}
				
			}
			
		}
	}
	
	.function-list{
		margin-bottom: 120upx;
	}
	
	.tabbar{		
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
	}
	.edit-icon{
		font-size: 50upx;
	}
	.content-box{
		border-top: 1upx solid #ccc;
		border-bottom: 1upx solid #ccc;
		margin: 0 40upx;
		padding: 10upx 0;
		font-size: 24upx;
		
		color: #949494;
		
		// 案例列表
		.case-box{
			color: #949494;
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
		
		// 地址展示
		.address{
				
			.addressinfo{
				margin-left: 10upx;
				font-size: 28upx;
				color: #949494;
			}
		}
		.map-box{
		}
		
	}
	.scroll-view{
		white-space: nowrap;
	}
	
	
}
</style>
