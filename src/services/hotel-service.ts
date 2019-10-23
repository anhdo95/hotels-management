import config from '@/config'
import request from '@/util/request'
import HotelRequest from '@/interfaces/hotel-request'

export default class HotelService {
	async searchDestinations(params: any = {}) {
    const data = {
      input: params.input && params.input.trim()
    }

    const res = await request({
      url: config.api.destination.search,
      method: 'post',
      data
    })

    if (res.error) {
      throw new Error(res.error)
    }

    return res.data
  }

  async searchHotels(params: HotelRequest) {
    const data = {
      query: {
        location: params.location.trim(),
        minStar: params.minStar,
        maxStar: params.maxStar,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice
      },
      sorting: {
        sortBy: params.sortBy,
        desc: params.sortDesc
      },
      paging: {
        take: params.pageSize,
        skip: (params.pageNumber - 1) * params.pageSize
      }
    }

    const res = await request({
      url: config.api.hotel.search,
      method: 'post',
      data
    })

    if (res.error) {
      throw new Error(res.error)
    }

    return res.data
	}
}
