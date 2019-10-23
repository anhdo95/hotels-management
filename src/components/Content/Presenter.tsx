import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Row, Col, List, Icon, Pagination } from 'antd';
import { ListGridType } from 'antd/lib/list';
import classNames from 'classnames'

import isEmpty = require('lodash/isEmpty')

import Sorting from '@/components/Content/Sorting/Container'

import { REGEX, ITEM_PER_PAGE } from '@/util/constants';
import { changeUrl, getUrlParams } from '@/util/helpers'

import './style.scss'

const DEFAULT_PAGE = 1

const VIEW_MODE: {
  GRID: ListGridType,
  LIST: ListGridType
} = {
  GRID: {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
  LIST: {
    gutter: 16,
    xs: 1
  }
}

interface PresenterProps extends RouteComponentProps {
  hotels: any[]
}

interface PresenterState {
  isListViewMode: boolean,
  viewMode: any,
  pageNumber: number
}

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    const params = getUrlParams(props.history)

    this.state = {
      isListViewMode: false,
      viewMode: VIEW_MODE.GRID,
      pageNumber: isEmpty(params) ? DEFAULT_PAGE : Number(params.pageNumber)
    }
  }


  handlePaginationChange = (pageNumber: number) => {
    const { history, location } = this.props

    changeUrl(history, location, {
      ...getUrlParams(history),
      pageNumber
    })

    this.setState({ pageNumber })
  }

  handleViewModeChange = (viewMode: ListGridType) => {
    return () => {
      this.setState({
        viewMode,
        isListViewMode: viewMode === VIEW_MODE.LIST
      })
    }
  }

  renderTop() {
    return (
      <Row type="flex" justify="space-between" gutter={16}>
        <Col {...{ xs: 24, md: 16 }}>
          <h2>555 hotels in Đà Nẵng, Vietnam</h2>
        </Col>
        <Col {...{ xs: 24, md: 8 }}>
          <Row className="content__right" type="flex">
            <Sorting />
            <Icon className="content__grid-view" type="appstore" onClick={this.handleViewModeChange(VIEW_MODE.GRID)} />
            <Icon className="content__list-view" type="menu" onClick={this.handleViewModeChange(VIEW_MODE.LIST)} />
          </Row>
        </Col>
      </Row>
    )
  }

  renderThumbnai(hotel: any) {
    const { name } = hotel

    const hotelImages = [
      '/assets/images/hotels/hotel-4431944_960_720.jpg',
      '/assets/images/hotels/hotel-4431938_960_720.jpg',
      '/assets/images/hotels/hotel-2400364_960_720.jpg'
    ]

    console.log('1111', 1111)

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    const randomImage = hotelImages[getRandomInt(3)]

    return (
      <div className="content__hotel-img-wrap">
        <figure className="content__hotel-thumb">
          <img className="abs-full content__hotel-img" src={randomImage} alt={name} />
        </figure>
      </div>
    )
  }

  renderDescription(hotel: any) {
    return (
      <div className="content__hotel-content">
        <section className="flex-column content__hotel-content-inner">
          <h3 className="content__hotel-name">{hotel.name}</h3>
          <p className="content__hotel-description">3 guests · 1 bedroom · 1 bathroom</p>
          <p className="content__hotel-price"><strong>{hotel.cheapestPrice.toString().replace(REGEX.NUMBER_TO_CURRENCY_FORMAT, ',')}₫/night</strong></p>
          <p className="content__hotel-location">{hotel.addressLines}</p>
          <p>{this.renderStars(hotel)}</p>
        </section>
      </div>
    )
  }

  renderStars(hotel: any) {
    let { stars } = hotel
    const svgUrls = []

    while (stars) {
      if (stars >= 1) {
        svgUrls.push('/assets/svg/star.svg')
      } else if (stars === 0.5) {
        svgUrls.push('/assets/svg/half-star.svg')
        break
      }

      stars--
    }

    return svgUrls.map((svgUrl, index) => (
      <img key={index} className="content__star" src={svgUrl} />
    ))
  }

  renderHotels() {
    const listItemClassName = classNames('content__hotel flex-column', {
      'content__hotel--listview': this.state.isListViewMode,
    })

    return (
      <List
        className="content__hotels"
        grid={this.state.viewMode}
        dataSource={this.props.hotels}
        renderItem={(hotel) => (
          <List.Item>
            <a className={listItemClassName} href="#">
              {this.renderThumbnai(hotel)}
              {this.renderDescription(hotel)}
            </a>
          </List.Item>
        )}
      />
    )
  }

  render() {
    const { hotels } = this.props

    return (
      <section className="content">
        {this.renderTop()}
        {this.renderHotels()}
        {hotels && hotels.length > ITEM_PER_PAGE && (
          <Pagination
            className="align-c"
            current={this.state.pageNumber}
            defaultCurrent={DEFAULT_PAGE}
            pageSize={ITEM_PER_PAGE}
            total={50}
            onChange={this.handlePaginationChange}
          />
        )}
      </section>
    )
  }
}
