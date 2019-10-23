import RootState from '@/interfaces/state/root-state'

import { composeContainer } from '@/util'

import Presenter from './Presenter'

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

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
