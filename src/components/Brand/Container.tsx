import RootState from '@/interfaces/state/root-state'

import { composeContainer } from '@/util'
// import { setTodos } from '@/redux/actions/todo';

import TodoService from '@/services/todo-service'

import Presenter from './Presenter'

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  const todoService = new TodoService()

  return {
    async getTodos() {
      const todos = await todoService.getTodos()

      console.log('todos :', todos)

      // dispatch(setTodos(todos))
    }
  }
}

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
