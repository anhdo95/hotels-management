import { History, Location } from 'history';
import { stringify, parse } from 'query-string';
import { REGEX } from './constants';
// import HotelParams from '@/interfaces/hotel-params';

export const changeUrl = (history: History, location: Location, params = {}) => {
  history.push(
    `${location.pathname}?${stringify(params, { arrayFormat: 'bracket' })}`
  )
}

export const getUrlParams = (history: History) => {
  return parse(history.location.search, { arrayFormat: 'bracket' })
}

export const formatNumberToCurrency = (value: number) => {
  return `${value}`.replace(REGEX.NUMBER_TO_CURRENCY_FORMAT, ',')
}

export const parseCurrencyToNumber = (value: string) => {
  return value.replace(REGEX.CURRENCY_TO_NUMBER_FORMAT, '')
}

// export const parseQueryStringToHotelParams = (queryString: ParsedQuery<any>): HotelQuery => {
//   return {
//     location: queryString.location,
//     minPrice: Number(queryString.minPrice),
//     maxPrice: Number(queryString.maxPrice),
//     pageNumber: Number(queryString.pageNumber),
//     starRange: queryString.starRange.map(Number)
//   }

//   // location: string
// 	// starRange: [ number, number ]
// 	// minPrice: number | string
// 	// maxPrice: number | string
// 	// sort: string
// 	// pageNumber: number | string
// }

