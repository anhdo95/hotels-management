import RootState from '@/interfaces/state/root-state'

import { composeContainer } from '@/util'

import Presenter from './Presenter'

const mapStateToProps = (_state: RootState) => {
  return {
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default composeContainer(Presenter, mapStateToProps, mapDispatchToProps)
