import {UPDATEHOMEDATA} from '../mutation-types.js'
import request from '../../utils/request.js'

const state = {
	kingKong: {}
}

const mutations = {
	[UPDATEHOMEDATA](state, data) {
		state.kingKong = data
	}
}

const actions = {
	async getHomeData({commit}) {
			const res = await request('/getHomeData')
			if(!res) {
				const data = {
					"kingKongModule": {
						"kingKongList": [
							{
							  "text": "居家生活",
								"L1Id": 111
							},
							{
							  "text": "服饰鞋包",
								"L1Id": 222
							},
							{
							  "text": "美食酒水",
								"L1Id": 333
							}
						]
					}
				}
				
				commit(UPDATEHOMEDATA, data)
			}else {
				commit(UPDATEHOMEDATA, res.data)
			}
	}
}

const getters = {
	categoryList(state) {
		if(!state.kingKong.kingKongModule) {
			state.kingKong.kingKongModule = {}
		}
		return state.kingKong.kingKongModule.kingKongList
	},
	policyList(state) {
		return state.kingKong.policyDescList
	},
	goodsInfo(state) {
		return state.kingKong.categoryModule
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}