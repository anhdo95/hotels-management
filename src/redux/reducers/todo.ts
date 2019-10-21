import cloneDeep = require('lodash/cloneDeep');

import { ACTIONS } from '@/util/constants'

const initialState: any = {
  todos: []
}

const todoReducer = (state = initialState, action: any) => {
  const newState = cloneDeep(state)

  switch (action.type) {
    case ACTIONS.SET_TODOS:
      newState.todos = action.payload.todos
      return newState

    default:
      return state
  }
}

export default todoReducer
