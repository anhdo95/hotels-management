import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'

import RootState from '@/interfaces/state/root-state'
import HotelService from '@/services/hotel-service'

import Presenter from './Presenter'

interface StateProps {}

interface DispatchProps {
  searchDestinations: (destination: string) => Promise<string[]>
}

interface OwnProps extends RouteComponentProps {
  destination: string | any,
  onLocationChange: (location: string) => void,
}
const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  const hotelService = new HotelService()

  return {
    async searchDestinations(destination: string) {
      const params = {
        input: destination
      }

      try {
        return await hotelService.searchDestinations(params)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Presenter))
