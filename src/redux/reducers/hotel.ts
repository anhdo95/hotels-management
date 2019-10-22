import cloneDeep = require('lodash/cloneDeep');

import { ACTIONS } from '@/util/constants'

const initialState: any = {
  locations: []
}

const hotelReducer = (state = initialState, action: any) => {
  const newState = cloneDeep(state)

  switch (action.type) {
    case ACTIONS.SET_HOTEL_LOCATIONS:
      newState.locations = action.payload.locations
      return newState

    default:
      return state
  }
}

export default hotelReducer
