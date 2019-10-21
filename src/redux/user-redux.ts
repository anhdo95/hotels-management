import BaseRedux from '@/base/base-redux'
import UserState from '@interfaces/state/user-state'

class UserRedux extends BaseRedux {
  private static _instance: UserRedux

  private constructor() {
    super()
  }

  static get instance(): UserRedux {
    if (!(UserRedux._instance instanceof UserRedux)) {
      UserRedux._instance = new UserRedux()
    }

    return UserRedux._instance
  }

	protected defineReducerName() {
		return 'user'
	}

	protected defineDefaultState(): UserState {
		return {
			loggedIn: false,
			userId: undefined,
			email: undefined,
			profile: {},
		}
	}
}

export default UserRedux
