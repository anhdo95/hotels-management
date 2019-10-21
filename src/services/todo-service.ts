import config from '@/config'
import BaseService from '@/base/base-service'
import TodoRedux from '@/redux/todo-redux'

export default class TodoService extends BaseService {
	async getTodos() {
		return fetch(config.api.todo.all)
			.then((res) => res.json())
			.then((data) => {
				const { todos } = data

				this.dispatch(TodoRedux.instance.action.updateTodos(todos))

				Promise.resolve(todos)
			})
			.catch(Promise.reject)
	}
}
