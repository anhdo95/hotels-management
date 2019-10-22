import { combineReducers } from 'redux'

import hotelReducer from '@redux/reducers/hotel'

export default combineReducers({
  hotel: hotelReducer,
})
