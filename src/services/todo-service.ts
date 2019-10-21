// import config from '@/config'

export default class TodoService {
	async getTodos() {
		return new Promise((resolve) => {
			const res: any = {
				error: null,
				data: [
					'long giang, vietnam',
					'ha long, quang ninh, vietnam',
					'bai tu long/ hai phong, vietnam',
				],
			}

			resolve(res.data)
		})
		// return fetch(config.api.todo.all)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		const { todos } = data

		// 		Promise.resolve(todos)
		// 	})
		// 	.catch(Promise.reject)
	}
}
