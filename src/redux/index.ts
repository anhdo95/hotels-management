import { combineReducers } from 'redux'

import todoReducer from '@redux/reducers/todo'

export default combineReducers({
  todo: todoReducer,
})
