<template>
	<view class="qiun-columns">
				
		<view class="header text-lg padding-sm text-bold">
			<view class="text-center">
				<!-- 四川省绵阳市高新区繁华广场5单元4号门 -->
				{{address.addressurl}}{{address.addressinfo}}
			</view>
			<view class="text-center">
				检测报告
			</view>
		</view>
		<view  v-for="(item,index) in serverList" :key="index" class="margin-top">
			
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">{{item.project}}</view>
			</view>
			<view class="qiun-charts">	
				<canvas :canvas-id="'canvasColumn_'+index" :id="'canvasColumn_'+index" class="charts" ></canvas>
			</view>
		
		</view>
		<sharebtn></sharebtn>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/components/u-charts/u-charts.js';
	import service from '../../service.js';
	import sharebtn from '../../components/shareBox.vue';
	var _self;
	var canvaColumn=null;
	export default {
		data() {
			return {
				address:{
					addressurl:"省市区",
					addressinfo:"100栋",
				},
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				serverList:[
					
				],
				id:''
			}
		},
		components:{
			sharebtn
		},
		onLoad(option) {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			if(option.id){
				this.id = option.id;
				this.getServerData();
			}
			
		},
		methods: {
			getServerData(){				
				uni.request({
					url: service.BASEURL+"/home/share/export_data",
					method:"POST",
					data:{
						id:this.id
					},
					success: function(res) {
						_self.address = res.data.data.address;
						// // console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverData=res.data.data;
						_self.updateData(res.data.data.list);
						
						// let Column={categories:[],series:[]};
						// 这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// Column.categories=res.data.data.Column.categories;
						// 这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
						// Column.series=res.data.data.Column.series;
						// _self.showColumn("canvasColumn",Column);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
					},
				});
			},
			updateData(list){
				let ServerList = [];
				if(list){
					list.forEach(item=>{
						let nitem = {}
						nitem.project = item.project
						let Column={categories:[],series:[]};
						if(item.num>0){
							// Column.categories = Column.categories.concat(['甲醛','苯','TVOC','湿度','温度']);
							for(let i = 0; i<item.num;i++){
								Column.categories.push(`第${i+1}次`);
							}
						}
						if(item.data && item.data.length>0){
							Column.series.push({
								name:'甲醛',
								data:item.data.map(m=>m.cho2)
							})
							Column.series.push({
								name:'苯',
								data:item.data.map(m=>m.c6h6)
							})
							Column.series.push({
								name:'TVOC',
								data:item.data.map(m=>m.tvoc)
							})
							// Column.series.push({
							// 	name:'湿度',
							// 	data:item.data.map(m=>m.humidity)
							// })
							// Column.series.push({
							// 	name:'温度',
							// 	data:item.data.map(m=>m.temperature)
							// })
						}
						nitem.Column = Column;
						ServerList.push(nitem)						
					})
				}
				if(ServerList.length>0){
					for (let i = 0; i < ServerList.length; i++) {
						this.showColumn(`canvasColumn_${i}`,ServerList[i].Column);
					}
					this.serverList = ServerList;
				}
			},
			showColumn(canvasId,chartData){
				canvaColumn =new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:true,
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
						  width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
			}
		}
	}
</script>

<style>
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
/* 通用样式 */
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>