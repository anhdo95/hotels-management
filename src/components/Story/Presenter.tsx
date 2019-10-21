import * as React from 'react'

import './style.scss'

interface PresenterProps {
  todos: Todo[]
  getTodos: () => any
}

export default class Presenter extends React.Component<PresenterProps> {
	componentDidMount() {
		this.props.getTodos()
	}

	render() {
		return (
			<div>
				{this.props.todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</div>
		)
	}
}
