import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Select } from 'antd'

import map = require('lodash/map')

import { SORTING_HOTEL_OPTIONS } from '@/util/constants';
import { changeUrl, getUrlParams } from '@/util/helpers'

import './style.scss'

const { Option } = Select

interface PresenterProps extends RouteComponentProps {

}

export default class Presenter extends React.PureComponent<PresenterProps> {
  handleChange = (sort: string) => {
    const { history, location } = this.props

    changeUrl(history, location, {
      ...getUrlParams(history),
      sort
    })
  }

  render() {
    return (
      <Select
        size="large"
        style={{ width: 250 }}
        placeholder="Order by: Select"
        onChange={this.handleChange}
      >
        {map(SORTING_HOTEL_OPTIONS, (option) => (
          <Option key={option.key} value={option.key}>{option.value}</Option>
        ))}
      </Select>
    )
  }
}
