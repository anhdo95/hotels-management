import RootState from '@/interfaces/state/root-state'

import { composeContainer } from '@/util'
import TodoService from '@/services/todo-service';

import Presenter from './Presenter'

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  const todoService = new TodoService()

  return {
    async getTodos() {
      console.log('todoService.getTodos() :', await todoService.getTodos());
    }
  }
}

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
