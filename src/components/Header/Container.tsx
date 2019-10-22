import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import HotelService from '@services/hotel-service'

import RootState from '@/interfaces/state/root-state'
import HotelParams from '@interfaces/hotel-params'

import { STAR_SLIDER } from '@/util/constants'

import Presenter from './Presenter'

interface StateProps {}

interface DispatchProps {
  searchHotels: (params: HotelParams) => Promise<any[]>
}

interface OwnProps extends RouteComponentProps {
}

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  const hotelService = new HotelService()

  return {
    async searchHotels(params: HotelParams) {
      const requestParams = {
        ...params,
        minStar: STAR_SLIDER.KEY_TO_VALUE[params.minStar],
        maxStar: STAR_SLIDER.KEY_TO_VALUE[params.maxStar],
      }

      console.log('requestParams', requestParams)

      try {
        return await hotelService.searchHotels(requestParams)
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
