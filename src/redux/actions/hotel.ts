import { ACTIONS } from '@/util/constants'

export const setLocations = (locations: string[]) => {
  return {
    type: ACTIONS.SET_HOTEL_LOCATIONS,
    payload: {
      locations
    }
  }
}