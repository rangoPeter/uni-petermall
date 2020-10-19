<template>
	<view class="buyingContainer">
		openId: 
		<view>{{openId}}</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	
	export default {
		data() {
			return {
				saleGoods: {},
				photoList: ["https://yanxuan.nosdn.127.net/e72e29b81e2178a4ee98b25da5898265.jpg"],
				openId: ''
			}
		},
		mounted() {
			uni.login({
				success: async ({code}) => {
					
					const res = await request('/getOpenId', {code})
					this.openId = res.data
				}
			})
		},
		methods: {
			async getBuyingInfo() {
				const res = await request('/getBuyingData')
				if(res.code === 200) {
					this.saleGoods = res.data.result
				}
			}
		}
	}
</script>

<style lang="stylus">
</style>
