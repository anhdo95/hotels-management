import { ACTIONS } from '@/util/constants';

export const setTodos = (todos: any[]) => {
  return {
    type: ACTIONS.SET_TODOS,
    payload: {
      todos
    }
  }
}
