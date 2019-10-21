import TodoState from './todo-state'
import UserState from './user-state'

export default interface RootState {
	todo: TodoState
	user: UserState
}
