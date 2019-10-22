import * as React from 'react'
import { Divider } from 'antd';

import './style.scss'

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
  render() {
    return (
      <footer className="align-c footer">
         <Divider>© 2019 <a href="https://github.com/anhdo95">Anh Do</a>. All rights reserved</Divider>
      </footer>
    )
  }
}
