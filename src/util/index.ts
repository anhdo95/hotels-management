import { connect } from 'react-redux'
import noop = require('lodash/noop')

import request from './request'

/**
 * Middleware for react-redux connect
 *
 * @param component
 * @param mapState
 * @param mapDispatch
 */
export const composeContainer = (
	component: React.ComponentType,
	mapStateToProps: any,
	mapDispatchToProps: any = noop()
) => {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default {
  composeContainer,
  request,
}
