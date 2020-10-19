<template>
	<view class="goodsContainer">
		<image class="goodsImg" :src="goods.titlePicUrl" mode=""></image>
		<scroll-view class="goods" scroll-x>
			<view class="goods-item" v-for="item in goods.itemList" :key="item.id">
				<image class="common" :src="item.showPicUrl"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="goods-item common more">查看更多></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="stylus">
	.goodsContainer
		margin-top 20upx
		.goodsImg
			width 100%
			height 370upx
		.goods
			white-space nowrap
			.common
				width 200upx
				height 200upx
				background-color #eee
			.more
				line-height 200upx
				text-align center
				vertical-align top
				font-size 28upx
			.goods-item
				display inline-block
				margin 10upx 20upx
				width 200upx
				text
					white-space pre-wrap // 解决上面继承下来的white-space
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					overflow hidden
					text-overflow ellipsis
					font-size 24upx
					height 64upx
</style>
