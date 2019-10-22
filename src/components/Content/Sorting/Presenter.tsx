import * as React from 'react'
import { Row, Select } from 'antd';

import './style.scss'

const { Option } = Select;

interface PresenterProps {

}

function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val: any) {
  console.log('search:', val);
}

export default class Presenter extends React.Component<PresenterProps> {
  componentDidMount() {
  }

  render() {
    return (
      <Row className="content__sorting" type="flex">
        <Select
          showSearch
          size="large"
          style={{ width: 300 }}
          placeholder="Order by: Select"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="name:asc">Name: Alphabetical Ascending</Option>
          <Option value="name:desc">Name: Alphabetical Descending</Option>
          <Option value="price:asc">Price: Low to High</Option>
          <Option value="price:desc">Price: High to Low</Option>
        </Select>
      </Row>
    )
  }
}
