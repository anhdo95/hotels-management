import cloneDeep = require('lodash/cloneDeep')

import HotelState from '@/interfaces/state/hotel-state'
import { ACTIONS } from '@/util/constants'

const initialState: HotelState = {
  locations: [],
  hotels: [],
}

const hotelReducer = (state = initialState, action: any) => {
  const newState = cloneDeep(state)

  switch (action.type) {
    case ACTIONS.SET_HOTEL_LOCATIONS:
      newState.locations = action.payload.locations
      break

    case ACTIONS.SET_HOTELS:
      newState.hotels = action.payload.hotels
      break

    default:
      return state
  }

  return newState
}

export default hotelReducer
