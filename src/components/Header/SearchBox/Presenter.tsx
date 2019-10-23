import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { AutoComplete } from 'antd'
// import { stringify } from 'query-string'

import debounce = require('lodash/debounce')

import { SEARCH_DEBOUNCE_IN_MS } from '@/util/constants'

import './style.scss'

const { Option, OptGroup } = AutoComplete

interface PresenterProps extends RouteComponentProps {
  searchDestinations: (destination: string) => Promise<string[]>
  onLocationChange: (location: string) => void
}

interface PresenterState {
  destinations: string[]
}

class Presenter extends React.Component<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    this.state = {
      destinations: []
    }
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

  // tslint:disable-next-line: member-ordering
  handleSearch = debounce(async (location: string) => {
    const destinations = await this.props.searchDestinations(location)

    this.setState({ destinations })

    this.props.onLocationChange(location)
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

export default withRouter(Presenter)
