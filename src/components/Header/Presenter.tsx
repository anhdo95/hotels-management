import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { InputNumber, Button, Row, Col, Slider, Icon } from 'antd'
import { stringify, parse } from 'query-string'

import SearchBox from '@components/Header/SearchBox/Container'

import HotelParams from '@interfaces/hotel-params'
import { REGEX } from '@/util/constants'

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
  searchHotels: (params: HotelParams) => Promise<any[]>
}

interface PresenterState {
  hotels: object[],
  params: HotelParams
}

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    this.state = {
      hotels: [],
      params: {
        location: '',
        starRange: [0, 100],
        minPrice: 0,
        maxPrice: 0,
        sortBy: '',
        sortDesc: false,
        pageNumber: 1
      }
    }
  }

  updateParams = (overrideParams: object) => {
    const params = {
      ...this.state.params,
      ...overrideParams
    }

    this.setState({ params }, this.changeURL.bind(this, params))
  }

  changeURL = (params = {}) => {
    this.props.history.push(
      `${this.props.location.pathname}?${stringify(params, { arrayFormat: 'bracket' })}`
    )
  }

  getParams() {
    return parse(this.props.history.location.search, { arrayFormat: 'bracket' })
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
    const { params } = this.state

    const hotels = await this.props.searchHotels(params)

    this.changeURL(params)
    this.setState({ hotels })
  }

  render() {
    return (
      <header className="rel header">
        <Row type="flex" justify="space-between" gutter={16}>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <SearchBox onLocationChange={this.handleLocationChange} />
          </Col>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <Slider
              className="header__stars"
              range
              tooltipVisible={false}
              step={20}
              defaultValue={this.state.params.starRange}
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
