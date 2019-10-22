import * as React from 'react'
import { AutoComplete, InputNumber, Button, Row, Col, Slider, Icon } from 'antd'

import './style.scss'

const { Option, OptGroup } = AutoComplete;

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

const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
];

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={group.title}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);

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
            <AutoComplete
              className="header__search-box"
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={false}
              dropdownStyle={{ width: 300 }}
              size="large"
              style={{ width: '100%' }}
              dataSource={options}
              placeholder="Find hotels by location"
              optionLabelProp="value"
            />
          </Col>
          <Col {...{ xs: 24, md: 24, lg: 8 }}>
            <Slider className="header__stars" marks={buildStars()} step={20} />
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
