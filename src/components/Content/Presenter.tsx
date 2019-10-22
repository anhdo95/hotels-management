import * as React from 'react'
import { Row, Col } from 'antd';

import Sorting from '@/components/Content/Sorting/Container';

import './style.scss'

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
  componentDidMount() {
  }

  render() {
    return (
      <section className="content">
        <Row type="flex" justify="space-between" gutter={16}>
          <Col {...{ xs: 24, md: 14 }}>
            <h2>555 hotels in Đà Nẵng, Vietnam</h2>
          </Col>
          <Col {...{ xs: 24, md: 8 }}>
            <Sorting />
          </Col>
        </Row>
      </section>
    )
  }
}
