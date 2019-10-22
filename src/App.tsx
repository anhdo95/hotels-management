import * as React from 'react'

import Nav from '@/components/Nav/Container'
import Header from '@/components/Header/Container'

import 'antd/dist/antd.css'
import './app.scss'

const App = () => {
	return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header />
      </main>
    </div>
	)
}

export default App
