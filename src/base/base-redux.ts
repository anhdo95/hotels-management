import cloneDeep = require('lodash/cloneDeep')
import isString = require('lodash/isString')
import upperFirst = require('lodash/upperFirst')

import { Reducer } from 'redux'

enum ActionType {
	UPDATE,
	RESET,
}
interface ReduxAction {
	type: ActionType
	property: string
	payload: any
}
export default class BaseRedux {
	private baseReducer: Reducer
	private actions: any

	constructor() {
		this.buildReducer()
		this.buildActions()
	}

	get action() {
		return this.actions
	}

	get reducer() {
		return this.baseReducer
	}

	protected defineReducerName(): string {
		return undefined
	}

	protected defineDefaultState(): any {
		return {}
	}

	private buildReducer() {
		this.verifyReducer()

		this.baseReducer = (state = this.defineDefaultState(), action: ReduxAction) => {
			const { type, payload, property } = action

			const newState = cloneDeep(state)

			switch (type) {
				case ActionType.UPDATE:
					if (payload && this.actions[`update${upperFirst(property)}`]) {
						newState[property] = payload
					}

					return newState

				case ActionType.RESET:
					if (this.actions[`update${upperFirst(property)}`]) {
						newState[property] = {
							[property]: payload || this.defineDefaultState()[property],
						}
					}

					return newState
			}

			return newState
		}

		return this.baseReducer
	}

	private buildActions() {
		this.actions = {}

		for (const property in this.defineDefaultState()) {
			this.actions[this.getActionName(property, ActionType.UPDATE)] = this.createAction(
				ActionType.UPDATE,
				property
			)

			this.actions[this.getActionName(property, ActionType.RESET)] = this.createAction(
				ActionType.RESET,
				property
			)
		}

		return this.actions
	}

	private verifyReducer() {
		const reducerName = this.defineReducerName()

		if (!reducerName || !isString(reducerName)) {
			throw new Error(`An invalid reducer name ${reducerName}`)
		}
	}

	private createAction(type: ActionType, property: string) {
		return (payload: any): ReduxAction => ({
			type,
			property,
			payload,
		})
	}

	private getActionName(property: string, type: ActionType): string {
		property = upperFirst(property)

		switch (type) {
			case ActionType.UPDATE:
				return `update${property}`

			case ActionType.RESET:
				return `reset${property}`

			default:
				return property
		}
	}
}
