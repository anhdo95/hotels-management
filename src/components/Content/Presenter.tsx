import * as React from 'react'
import { Row, Col, List, Icon, Pagination } from 'antd';
import { ListGridType } from 'antd/lib/list';
import classNames from 'classnames'

import Sorting from '@/components/Content/Sorting/Container'

import './style.scss'

const PAGE_SIZE = 20
const CURRENT_PAGE = 1

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

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

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
  state = {
    isListViewMode: false,
    viewMode: VIEW_MODE.GRID
  }

  handlePaginationChange = (page: number) => {
    console.log('page :', page);
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

  renderHotels() {
    const listItemClassName = classNames('content__hotel flex-column', {
      'content__hotel--listview': this.state.isListViewMode,
    })

    return (
      <List
        className="content__hotels"
        grid={this.state.viewMode}
        dataSource={data}
        renderItem={() => (
          <List.Item>
              <a className={listItemClassName} href="#">
                <div className="content__hotel-img-wrap">
                  <figure className="content__hotel-thumb">
                    <img className="abs-full content__hotel-img" src="/assets/images/hotels/hotel-2400364_960_720.jpg" alt="New York" />
                  </figure>
                </div>
                <div className="content__hotel-content">
                  <section className="flex-column content__hotel-content-inner">
                    <h3 className="content__hotel-name">Bonne Nuit Hotel</h3>
                    <p className="content__hotel-description">3 guests · 1 bedroom · 1 bathroom</p>
                    <p className="content__hotel-price"><strong>360,000₫/night</strong></p>
                    <p className="content__hotel-location">
                    30A Cua Dong
                    </p>
                    <p>
                      <Icon className="content__star" type="star" theme="filled" />
                      <Icon className="content__star" type="star" theme="filled" />
                      <Icon className="content__star" type="star" theme="filled" />
                      <Icon className="content__star" type="star" theme="filled" />
                      <Icon className="content__star" type="star" theme="filled" />
                    </p>
                  </section>
                </div>
              </a>
          </List.Item>
        )}
      />
    )
  }

  render() {
    return (
      <section className="content">
        {this.renderTop()}
        {this.renderHotels()}
        {/* {actresses && actresses.totalPages > PAGINATION.DEFAULT_PAGE && */}
        <Pagination
          className="align-c"
          current={CURRENT_PAGE}
          pageSize={PAGE_SIZE}
          total={50}
          onChange={this.handlePaginationChange}
        />
      </section>
    )
  }
}
