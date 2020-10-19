<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		<view class="content">
			<view class="left">
				<scroll-view class="left-scroll" show-scrollbar scroll-y>
					<view class="scroll-item" :class="category.id===currentId?'active':''" @click="switchNav(category.id)" v-for="category in categoryList" :key="category.id">{{category.name}}</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view class="right-scroll" scroll-y="true" v-if="goods">
					<view class="scrollHeader">
						<image :src="goods.imgUrl" mode=""></image>
					</view>
					<view class="scroll-item" v-for="subCate in goods.subCateList" :key="subCate.id">
						<image :src="subCate.wapBannerUrl" mode=""></image>
						<text>{{subCate.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	
	export default {
		data() {
			return {
				categoryList: [],
				currentId: null
			}
		},
		mounted() {
			this.getCategoryList()
		},
		methods: {
			async getCategoryList() {
				const res = await request('/getCategoryList')
				if(res.statusCode === 200) {
					this.categoryList = res.data
					this.currentId = res.data[0].id
				}
			},
			switchNav(id) {
				this.currentId = id
			}
		},
		computed: {
			goods() {
				const {currentId} = this
				return this.categoryList.find(item => item.id === currentId)
			}
		}
	}
</script>

<style lang="stylus">
	.categoryContainer
		.header
			border-bottom 2upx solid #eee
			.search
				margin 10upx auto
				width 704upx
				height 60upx
				background-color #eee
				text-align center
				line-height 60upx
				border-radius 10upx
				font-size 28upx
		.content
			height calc(100vh - 82upx - var(--window-top) - var(--window-bottom))
			.left
				float left
				width 20%
				height 100%
				box-sizing border-box
				border-right 2upx solid #eee
				.left-scroll
					height 100%
					.scroll-item
						position relative
						height 80upx
						line-height 80upx
						text-align center
						font-size 26upx
						&.active
							&::after
								content: ""
								position absolute
								top 10upx
								left 4upx
								width 2upx
								height 60upx
								background-color #bb2c08
			.right
				float right
				width 80%
				height 100%
				.right-scroll
					height 100%
					.scrollHeader
						image
							display block
							margin 10upx auto
							width 520upx
							height 190upx
					.scroll-item
						display inline-flex
						flex-direction column
						align-items center
						justify-content center
						width 33.333%
						image
							width 160upx
							height 144upx
						text
							width 100%
							font-size 24upx
							text-align center
</style>
