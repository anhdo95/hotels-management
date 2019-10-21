import { combineReducers } from 'redux'

import UserRedux from '@redux/user-redux'
import TodoRedux from '@redux/todo-redux'

export default combineReducers({
  todo: TodoRedux.instance.reducer,
  user: UserRedux.instance.reducer
})
