import RootState from '@/interfaces/state/root-state'

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

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
