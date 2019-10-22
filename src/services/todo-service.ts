// import config from '@/config'
import request from '@/util/request';

export default class TodoService {
	async getTodos() {
    return await request({
      // url: 'https://www.w3schools.com/angular/customers.php',
      url: '/assets/mock-data/destination-suggess.json',
      method: 'get',
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
