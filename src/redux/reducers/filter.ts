import cloneDeep = require('lodash/cloneDeep')

import { ACTIONS, DEFAULT_PAGE } from '@/util/constants'

const initialState = {
	hotel: {
    location: '',
    starRange: [ 0, 100 ],
    minPrice: 0,
    maxPrice: 0,
    sort: '',
    pageNumber: DEFAULT_PAGE
  }
}

const filterReducer = (state = initialState, action: any) => {
  const newState = cloneDeep(state)

  if (action && action.payload)
    console.log('action.payload.filter', action.payload.filter)

	switch (action.type) {
		case ACTIONS.SET_HOTEL_FILTER:
			newState.hotel = {
        ...newState.hotel,
        ...action.payload.filter
      }
			break

		default:
			return state
	}

	return newState
}

export default filterReducer