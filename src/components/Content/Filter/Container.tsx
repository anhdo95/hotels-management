// import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import RootState from '@/interfaces/state/root-state'

import Presenter from './Presenter'

interface StateProps { }

interface DispatchProps {
}

interface OwnProps extends RouteComponentProps {
  onPageChange: (pageNumber: number) => void
}

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps: any = () => {
  return {
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))
