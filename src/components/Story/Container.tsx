import RootState from '@/interfaces/state/root-state'

import TodoService from '@/services/todo-service'

import { composeContainer } from '@/util'

import Presenter from './Presenter'

const mapStateToProps = (state: RootState) => {
  console.log('state', state)
  return {
    todos: state.todo.todos,
  }
}

const mapDispatchToProps = () => {
  const todoService = new TodoService()

  return {
    async getTodos() {
      try {
        return await todoService.getTodos()
      } catch (error) {
        console.error(error)
      }
    },
  }
}

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
