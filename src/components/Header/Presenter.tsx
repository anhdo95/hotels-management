import * as React from 'react'
import { InputNumber, Button, Row, Col, Slider, Icon } from 'antd'

import SearchBox from '@components/Header/SearchBox/Container'
import { ITEM_PER_PAGE } from '@/util/constants'

import './style.scss'

// const mappingStarValue: any = {
//   0: 0,
//   20: 1,
//   40: 2,
//   60: 3,
//   80: 4,
//   100: 5,
// }

// const mappingStarKey: any = {
//   0: 0,
//   1: 20,
//   2: 40,
//   3: 60,
//   4: 80,
//   5: 100,
// }

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

interface PresenterProps {
  searchHotels: (params: object) => Promise<any[]>
}

interface PresenterState {
  hotels: object[],
  params: {
    location: string,
    minStar: number,
    maxStar: number,
    minPrice: number,
    maxPrice: number,
    sortBy: string,
    sortDesc: boolean,
    pageSize: number,
    pageNumber: number
  }
}

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    this.state = {
      hotels: [],
      params: {
        location: '',
        minStar: 0,
        maxStar: 100,
        minPrice: 0,
        maxPrice: 0,
        sortBy: '',
        sortDesc: false,
        pageSize: ITEM_PER_PAGE,
        pageNumber: 0
      }
    }
  }

  updateParams = (overrideParams: object) => {
    this.setState({
      params: {
        ...this.state.params,
        ...overrideParams
      }
    })
  }

  handleLocationChange = (location: string) => {
    this.updateParams({ location })
  }

  handleStarChange = (starRange: [number, number]) => {
    const [ minStar, maxStar ] = starRange
    this.updateParams({
      minStar,
      maxStar
    })
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
    // const hotels = await this.props.searchHotels(params)

    console.info('params', this.state.params)

    // this.setState({ hotels })
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
              defaultValue={[
                this.state.params.minStar,
                this.state.params.maxStar
              ]}
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
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={this.handlePriceChange(true)}
                />
                <InputNumber
                  className="header__max-price"
                  placeholder="Max price"
                  defaultValue={this.state.params.maxPrice}
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
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
