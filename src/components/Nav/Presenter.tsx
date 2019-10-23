import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

import './style.scss'

const menuItems = [
  { key: 'hotline', icon: 'phone', text: 'Hotline: 18001234' },
  { key: 'host', icon: 'home', text: 'Host' },
  { key: 'sign-up', icon: 'user', text: 'Sign up' },
  { key: 'sign-in', icon: 'login', text: 'Sign in' },
]

class Presenter extends React.PureComponent {
  render() {
    return (
      <nav className="nav">
        <div className="flex-center nav__left">
          <Link to="/">
            <img src="/assets/images/goquo-logo.png" />
          </Link>
        </div>
        <div className="nav__right">
          <Menu mode="horizontal">
            {menuItems.map(item => (
              <Menu.Item key={item.key}>
                <Icon type={item.icon} />
                {item.text}
              </Menu.Item>
            ))}
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
