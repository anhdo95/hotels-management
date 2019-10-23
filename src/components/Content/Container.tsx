import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import RootState from '@/interfaces/state/root-state'

import Presenter from './Presenter'

interface StateProps {}

interface DispatchProps {
}

interface OwnProps extends RouteComponentProps {
}

const mapStateToProps = (state: RootState) => {
  console.log('state', state)
  return {
    hotels: state.hotel.hotels
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))

