import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { InputNumber, Button, Row, Col, Slider, Icon } from 'antd'
import { ParsedQuery } from 'query-string'

import isEmpty = require('lodash/isEmpty')

// Components
import SearchBox from '@components/Header/SearchBox/Container'

// Interfaces
import HotelParams from '@interfaces/hotel-params'

// Utils
import { REGEX } from '@/util/constants'
import { changeUrl, getUrlParams } from '@/util/helpers'

// Styles
import './style.scss'


const buildStars = () => {
  const stars = [
    { key: 0, value: 0 },
    { key: 20, value: 1 },
    { key: 40, value: 2 },
    { key: 60, value: 3 },
    { key: 80, value: 4 },
    { key: 100, value: 5 },
  ]

  const marks: any = {}

  stars.forEach(star => {
    marks[star.key] = {
      style: {
        color: '#fe0',
      },
      label: <><i>{star.value}</i><Icon type="star" theme="filled" /></>,
    }
  })

  return marks
}

interface PresenterProps extends RouteComponentProps {
  searchHotels: (params: HotelParams | ParsedQuery<string>) => Promise<any[]>
}

interface PresenterState {
  hotels: object[],
  params: HotelParams | any
}

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    const params = getUrlParams(props.history)

    this.state = {
      hotels: [],
      params: isEmpty(params) ? {
        location: '',
        starRange: [0, 100],
        minPrice: 0,
        maxPrice: 0,
        sort: '',
        pageNumber: 1
      } : params
    }
  }

  componentDidMount() {
    if (!isEmpty(getUrlParams(this.props.history))) {
      this.handleSearch()
    }
  }

  updateParams = (overrideParams: object) => {
    const params = {
      ...this.state.params,
      ...overrideParams
    }

    this.setState({ params })
  }

  handleLocationChange = (location: string) => {
    this.updateParams({ location })
  }

  handleStarChange = (starRange: [number, number]) => {
    this.updateParams({ starRange })
  }

  handlePriceChange = (isMinPrice: boolean) => {
    return (price: number) => {
      const params: any = {}

      if (isMinPrice) {
        params.minPrice = price
      } else {
        params.maxPrice = price
      }

      this.updateParams(params)
    }
  }

  handleSearch = async () => {
    const { history, location, searchHotels } = this.props

    changeUrl(history, location, this.state.params)
    const hotels = await searchHotels(getUrlParams(history))

    this.setState({ hotels })
  }

  render() {
    return (
      <header className="rel header">
        <Row type="flex" justify="space-between" gutter={16}>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <SearchBox
              destination={this.state.params.location}
              onLocationChange={this.handleLocationChange}
            />
          </Col>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <Slider
              className="header__stars"
              range
              tooltipVisible={false}
              step={20}
              defaultValue={this.state.params.starRange.map(Number)}
              marks={buildStars()}
              onAfterChange={this.handleStarChange}
            />
          </Col>
          <Col>
            <Row type="flex" justify="end">
              <Col>
                <InputNumber
                  className="header__min-price"
                  placeholder="Min price"
                  defaultValue={this.state.params.minPrice}
                  formatter={value => `${value}`.replace(REGEX.NUMBER_TO_CURRENCY_FORMAT, ',')}
                  parser={value => value.replace(REGEX.CURRENCY_TO_NUMBER_FORMAT, '')}
                  onChange={this.handlePriceChange(true)}
                />
                <InputNumber
                  className="header__max-price"
                  placeholder="Max price"
                  defaultValue={this.state.params.maxPrice}
                  formatter={value => `${value}`.replace(REGEX.NUMBER_TO_CURRENCY_FORMAT, ',')}
                  parser={value => value.replace(REGEX.CURRENCY_TO_NUMBER_FORMAT, '')}
                  onChange={this.handlePriceChange(false)}
                />
              </Col>
              <Col>
                <Button
                  className="header__search-btn"
                  type="danger"
                  icon="search"
                  onClick={this.handleSearch}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </header>
    )
  }
}
