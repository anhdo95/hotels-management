import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import HotelService from '@services/hotel-service'

import RootState from '@/interfaces/state/root-state'
import HotelParams from '@/interfaces/hotel-params'
import HotelRequest from '@/interfaces/hotel-request'
import { setHotels } from '@/redux/actions/hotel';

import { STAR_SLIDER, ITEM_PER_PAGE } from '@/util/constants'

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

const mapDispatchToProps: any = (dispatch: Dispatch) => {
    const hotelService = new HotelService()

    return {
      async searchHotels(params: HotelParams) {
        const [ minStar, maxStar ] = params.starRange

        const requestParams: HotelRequest = {
          location: params.location,
          minPrice: params.minPrice,
          maxPrice: params.maxPrice,
          minStar: STAR_SLIDER.KEY_TO_VALUE[minStar],
          maxStar: STAR_SLIDER.KEY_TO_VALUE[maxStar],
          sortBy: params.sortBy,
          sortDesc: params.sortDesc,
          pageNumber: params.pageNumber,
          pageSize: ITEM_PER_PAGE
        }

        console.log('requestParams', requestParams)

        try {
          const hotels = await hotelService.searchHotels(requestParams)

          dispatch(setHotels(hotels))
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
