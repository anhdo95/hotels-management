// import config from '@/config'
import request from '@/util/request';

export default class HotelService {
	async searchDestinations(params: any) {
    const data = {
      input: params.input && params.input.trim()
    }

    const res = await request({
      url: '/destination/suggess',
      method: 'post',
      data
    })

    if (res.error) {
      throw new Error(res.error)
    }

    return res.data
	}
}
