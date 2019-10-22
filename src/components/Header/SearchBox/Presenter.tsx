import * as React from 'react'
import { AutoComplete } from 'antd'

import debounce = require('lodash/debounce')

import { SEARCH_DEBOUNCE_IN_MS } from '@/util/constants'

import './style.scss'

const { Option, OptGroup } = AutoComplete

interface PresenterProps {
  searchDestinations: (destination: string) => Promise<string[]>
}

interface PresenterState {
  destinations: string[]
}

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  state: PresenterState = {
    destinations: []
  }

  get options() {
    return [(
      <OptGroup key="search-result" label="SEARCH RESULT">
        {this.state.destinations.map(dest => (
          <Option key={dest} value={dest}>{dest}</Option>
        ))}
      </OptGroup>
    )]
  }

  handleSearch = debounce(async (value: string) => {
    const destinations = await this.props.searchDestinations(value)

    this.setState({ destinations })
  }, SEARCH_DEBOUNCE_IN_MS)

  render() {
    return (
      <AutoComplete
        className="header__search-box"
        style={{ width: '100%' }}
        size="large"
        placeholder="Find hotels by location"
        dataSource={this.options}
        onSearch={this.handleSearch}
      />
    )
  }
}
