import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import isEmpty = require('lodash/isEmpty')

import HotelService from '@services/hotel-service'

import RootState from '@/interfaces/state/root-state'
import HotelParams from '@/interfaces/hotel-params'
import HotelRequest from '@/interfaces/hotel-request'
import { setHotels } from '@/redux/actions/hotel';

import { STAR_SLIDER, ITEM_PER_PAGE } from '@/util/constants'

import Presenter from './Presenter'

interface StateProps { }

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
    async searchHotels(params: HotelParams | any = {}) {
      try {
        let requestParams: HotelRequest | any = {}

        if (!isEmpty(params)) {
          const [minStar, maxStar] = params.starRange
          const [sortBy, sortDesc] = params.sort.split(':')

          requestParams = {
            location: params.location,
            minPrice: Number(params.minPrice),
            maxPrice: Number(params.maxPrice),
            minStar: STAR_SLIDER.KEY_TO_VALUE[minStar],
            maxStar: STAR_SLIDER.KEY_TO_VALUE[maxStar],
            sortBy,
            sortDesc: sortDesc === 'true',
            pageNumber: Number(params.pageNumber),
            pageSize: ITEM_PER_PAGE
          }

          console.log('requestParams', requestParams)
        }

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
