import * as React from 'react'

import Nav from '@/components/Nav/Container'
import Header from '@/components/Header/Container'
import Content from '@/components/Content/Container'
import Footer from '@/components/Footer/Container'

import 'antd/dist/antd.css'
import './app.scss'

const App = () => {
	return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header />
        <Content />
      </main>
      <Footer />
    </div>
	)
}

export default App
