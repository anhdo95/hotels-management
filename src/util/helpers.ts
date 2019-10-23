import { History, Location } from 'history';
import { stringify, parse } from 'query-string';

export const changeUrl = (history: History, location: Location, params = {}) => {
  history.push(
    `${location.pathname}?${stringify(params, { arrayFormat: 'bracket' })}`
  )
}

export const getUrlParams = (history: History) => {
  return parse(history.location.search, { arrayFormat: 'bracket' })
}
