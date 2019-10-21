import BaseRedux from '@/base/base-redux'
import TodoState from '@/interfaces/state/todo-state'

class TodoRedux extends BaseRedux {
	private static _instance: TodoRedux

	private constructor() {
		super()
	}

	static get instance(): TodoRedux {
		if (!(TodoRedux._instance instanceof TodoRedux)) {
			TodoRedux._instance = new TodoRedux()
		}

		return TodoRedux._instance
	}

	protected defineReducerName() {
		return 'todo'
	}

	protected defineDefaultState(): TodoState {
		return {
			todos: [],
		}
	}
}

export default TodoRedux
