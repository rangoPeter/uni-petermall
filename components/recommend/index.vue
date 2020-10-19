<template>
	<view class="recommendContainer">
		<!-- 轮播区域 -->
		<swiper class="banner" indicator-dots autoplay circular :interval="3000" :duration="1000">
			<swiper-item class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/f5f639b4c8b21381a4ac5eea6f848d4c.png?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/77ff665c81b2c6cf320615cab87ce6eb.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/b73bbd079ad37b4db30c14295fd7be06.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 营销策略 -->
		<view class="policyList">
			<view class="policy-item" v-for="policy in policyList" :key="policy.icon">
				<image :src="policy.icon" mode=""></image>
				<text>{{policy.desc}}</text>
			</view>
		</view>
		<!-- 商品分类 -->
		<view class="categoryList">
			<view class="category-item" v-for="category in categoryList" :key="category.L1Id">
				<image :src="category.picUrl" mode=""></image>
				<text>{{category.text}}</text>
			</view>
		</view>
		
		<Category v-for="goods in goodsInfo" :key="goods.titlePicUrl" :goods="goods"/>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Category from '../../components/category/index.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters(['categoryList', 'policyList', 'goodsInfo'])
		},
		components: {
			Category
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.banner
			.swiper-item
				height 350upx
				image
					width 100%
					height 100%
		.policyList
			display flex
			justify-content space-around
			.policy-item
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 24upx
					vertical-align middle
		.categoryList
			display flex
			justify-content center
			flex-wrap wrap
			margin-top 10upx
			.category-item
				display flex
				flex-direction column
				align-items center
				width 20%
				image
					width 110upx
					height 110upx
				text
					font-size 24upx
</style>
