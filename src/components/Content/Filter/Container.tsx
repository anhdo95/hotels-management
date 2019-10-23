// import { Dispatch } from 'redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import RootState from '@/interfaces/state/root-state'
import { setHotelFilter } from '@/redux/actions/filter'

import Presenter from './Presenter'

interface StateProps {
  filter: any
}

interface DispatchProps {
  setHotelFilter: (filter: any) => void
}

interface OwnProps extends RouteComponentProps {
  onSearch: () => void,
}

const mapStateToProps = (state: RootState) => {
  return {
    filter: state.filter.hotel
  }
}

const mapDispatchToProps: any = (dispatch: Dispatch) => {
  return {
    setHotelFilter(filter: any) {
      dispatch(setHotelFilter(filter))
    }
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))
