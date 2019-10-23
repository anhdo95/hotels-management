import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Select } from 'antd'

import map = require('lodash/map')

import { SORTING_HOTEL_OPTIONS, DEFAULT_PAGE } from '@/util/constants';
import { changeUrl, getUrlParams } from '@/util/helpers'

import './style.scss'

const { Option } = Select

interface PresenterProps extends RouteComponentProps {
  onPageChange: (pageNumber: number) => void
}

export default class Presenter extends React.PureComponent<PresenterProps> {
  handleSelect = (sort: string) => {
    const { history, location, onPageChange } = this.props

    changeUrl(history, location, {
      ...getUrlParams(history),
      sort,
    })

    onPageChange(DEFAULT_PAGE)
  }

  render() {
    return (
      <Select
        size="large"
        style={{ width: 250 }}
        placeholder="Order by: Select"
        onSelect={this.handleSelect}
      >
        {map(SORTING_HOTEL_OPTIONS, (option) => (
          <Option key={option.key} value={option.key}>{option.value}</Option>
        ))}
      </Select>
    )
  }
}
