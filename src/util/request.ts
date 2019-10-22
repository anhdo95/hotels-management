import axios from 'axios'

import { RESPONSE_STATUS } from '@/util/constants';

const request = (options: any = {}) => {
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

	return axios(config).then(res => {
    const data = res.data

    if (data.status) {
      if (data.status === RESPONSE_STATUS.SUCCESS) {
        options.success && options.success(data.data)

        return data.data
      }

      options.error && options.error({
        code: data.data,
        message: data.message
      })

      return Promise.reject({
        code: data.data,
        message: data.message
      })
    }

    options.success && options.success(data)

    return data
	}).catch((...args) => {
    const [ res ] = args

    options.error && options.error(res)

    return Promise.reject(res)
  })
}

export default request
