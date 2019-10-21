// import axios from 'axios'

const request = (options = {}) => {
	const headers = {
		'Content-Type': 'application/json',
	}
	const config: any = {
    method: 'get',
		headers,
    credentials: 'include',
		data: {},
		...options,
	}

	config.method = config.method.toLowerCase()

	if (config.method === 'post' && config.headers['Content-Type'] === 'multipart/form-data') {
		// TODO: append to FormData
	} else if (config.method !== 'get' && config.method !== 'head') {
		config.data = JSON.stringify(config.data)
	} else {
		config.params = config.data
	}

	return fetch(config.url, config).then((res) => {
		console.info('res', res)
	})
}

export default request
