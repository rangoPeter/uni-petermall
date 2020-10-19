<template>
	<view class="indexContainer">
		<!-- 头部搜索区域 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input class="searchInput" type="text" placeholder-class="placeholder" placeholder="搜索商品" />
			</view>
			<button class="btn" type="default">登录</button>
		</view>
		<!-- navbar区域 -->
		<scroll-view class="navbar" 
			scroll-with-animation
			:scroll-into-view="'_'+currentIndex" scroll-x v-if="kingKong.kingKongModule" @click="switchNav">
			<view class="nav-item" data-index="999" :class="{active:currentIndex==='999'?true:''}">推荐</view>
			<view class="nav-item" 
				v-for="(item, index) in kingKong.kingKongModule.kingKongList" 
				:class="{active:currentIndex===`${index}`?true:''}"
				:data-index="`${index}`"
				:id="'_'+index"
				:key="item.L1Id">{{item.text}}</view>
		</scroll-view>
		<scroll-view class="recommendScroll" scroll-y="true" >
			<Recommend v-if="currentIndex==='999'"/>
			<CateList v-else :navIndex="currentIndex"/>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import request from '../../utils/request.js'
	import Recommend from '../../components/recommend/index.vue'
	import CateList from '../../components/cateList/index.vue'
	
	export default {
		data() {
			return {
				currentIndex: '999'
			}
		},
		mounted() {
			this.getHomeInfo()
		},
		methods: {
			switchNav(event) {
				const {index} = event.target.dataset
				if(index) {					
					this.currentIndex = index + ''
				}
			},
			getHomeInfo() {
				this.$store.dispatch('getHomeData')
			}
		},
		components: {
			Recommend,
			CateList
		},
		computed: {
			...mapState({
				kingKong: state => state.home.kingKong
			})
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display flex
			align-items center
			padding-top 20upx
			.logo
				margin 0 20upx
				flex-shrink 0
				width 140upx 
				height 40upx
			.search
				position relative
				flex-grow 1
				height 60upx
				background-color #ededed
				border-radius 10upx
				.searchInput
					padding-left 64upx
					height 100%
					line-height 60upx
				.placeholder
					line-height 60upx
					text-indent -64upx
					font-size 24upx
					text-align center
				.icon-sousuo
					position absolute
					top 50%
					padding-left 20upx
					transform translateY(-50%)
			.btn 
				margin 0 20upx
				flex-shrink 0
				width 144upx
				height 60upx
				line-height 60upx
				color #b4282d
		.navbar
			margin-bottom 10upx
			white-space nowrap
			.nav-item
				display inline-block
				margin 0 10upx
				width 140upx
				height 80upx
				text-align center
				line-height 80upx
				font-size 28upx
				&.active
					border-bottom 2upx solid #B4282D
		.recommendScroll
			height calc(100vh - 172upx - var(--window-top) - var(--window-bottom))
</style>
