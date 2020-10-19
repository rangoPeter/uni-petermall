// #ifdef MP-WEIXIN
const base_url = 'http://47.101.36.225:8000'
// #endif

// #ifdef H5
const base_url = '/api'
// #endif

export default function(url, data={}, method="GET") {
	return new Promise(function(res, rej) {
		uni.request({
			url: base_url + url,
			data,
			method,
			success(data) {
				res(data)
			},
			fail(error) {
				res(false)
			}
		})
	})
}