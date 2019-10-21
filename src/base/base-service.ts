import cloneDeep = require('lodash/cloneDeep')
import { Dispatch } from 'redux'
import store from '@redux/store'

export default class BaseService {
	constructor() {
		this.init()
	}

	init() {}

	get reduxState() {
		return cloneDeep(store.getState())
	}

	dispatch(action: any): Dispatch {
		return store.dispatch(action)
	}
}
