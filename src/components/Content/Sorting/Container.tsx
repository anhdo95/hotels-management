import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import RootState from '@/interfaces/state/root-state'

import Presenter from './Presenter'
import { Dispatch } from 'redux'
import { setHotelFilter } from '@/redux/actions/filter'
import { DEFAULT_PAGE } from '@/util/constants'

interface StateProps {}

interface DispatchProps {
  setSortFilter: (sort: any) => void
}

interface OwnProps extends RouteComponentProps {
  onSearch: () => void
}

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps: any = (dispatch: Dispatch) => {
  return {
    setSortFilter(sort: any) {
      dispatch(setHotelFilter({
        sort,
        pageNumber: DEFAULT_PAGE
      }))
    }
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))
