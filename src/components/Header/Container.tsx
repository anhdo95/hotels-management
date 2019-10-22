import RootState from '@/interfaces/state/root-state'
// import { connect } from 'react-redux'

import HotelService from '@/services/hotel-service'
import { composeContainer } from '@/util'

import Presenter from './Presenter'

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  const hotelService = new HotelService()

  return {
    async searchHotels(params: object) {
      try {
        return await hotelService.searchHotels(params)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
// export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Presenter)
