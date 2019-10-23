import { RouteComponentProps, withRouter } from 'react-router'
import { /* Dispatch */ } from 'redux'
import { connect } from 'react-redux'

import RootState from '@/interfaces/state/root-state'

import Presenter from './Presenter'

interface StateProps {}

interface DispatchProps {

}

interface OwnProps extends RouteComponentProps {
}

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = (/* dispatch: Dispatch */) => {
  return {

  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))
