import * as React from 'react'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu;

import './style.scss'

interface Props {
}

class Presenter extends React.Component<Props> {
  render() {
    return (
      <nav className="nav">
        <div className="flex-center nav__left">
          <a href="/">
            <img src="/assets/images/goquo-logo.png" />
          </a>
        </div>
        <div className="nav__right">
          <Menu mode="horizontal">
            <Menu.Item key="hotline">
              <Icon type="phone" />
              Hotline: 18001234
            </Menu.Item>
              <Menu.Item key="host">
                <Icon type="home" />
                Host
            </Menu.Item>
              <Menu.Item key="sign-up">
                <Icon type="user" />
                Sign up
            </Menu.Item>
              <Menu.Item key="sign-in">
                <Icon type="login" />
                Sign in
            </Menu.Item>
            <SubMenu
              key="language"
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  Language
              </span>
              }
            >
              <Menu.Item key="language:vietnamese">Vietnamese</Menu.Item>
              <Menu.Item key="language:english">English</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </nav>
    )
  }
}

export default Presenter
