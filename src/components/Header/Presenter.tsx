import * as React from 'react'
import { InputNumber, Button, Row, Col, Slider, Icon } from 'antd'

import SearchBox from '@components/Header/SearchBox/Container';

import './style.scss'

const buildStars = () => {
  const stars = [
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

}

export default class Presenter extends React.Component<PresenterProps> {
  onChange = (value: number) => {
    console.info('changed', value)
  }

  render() {
    return (
      <header className="rel header">
        <Row type="flex" justify="space-between" gutter={16}>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <SearchBox />
          </Col>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <Slider className="header__stars" tooltipVisible={false} marks={buildStars()} step={20} />
          </Col>
          <Col>
            <Row type="flex" justify="end">
              <Col>
                <InputNumber
                  className="header__min-price"
                  placeholder="Min price"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={this.onChange}
                />
                <InputNumber
                  className="header__max-price"
                  placeholder="Max price"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={this.onChange}
                />
              </Col>
              <Col><Button className="header__search-btn" type="danger" icon="search" /></Col>
            </Row>
          </Col>
        </Row>
      </header>
    )
  }
}
