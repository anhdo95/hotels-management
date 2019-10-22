import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from '@/components/Nav/Container'
import Header from '@/components/Header/Container'
import Footer from '@/components/Footer/Container'

import routes from '@/config/router'

import 'antd/dist/antd.css'
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <main className="main">
          <Header />
          {routes.map(route => (
            <Route key={route.path} exact path={route.path} component={route.component} />
          ))}
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
