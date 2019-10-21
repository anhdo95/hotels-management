import * as React from 'react'

import Header from '@/components/Header/Container'
import Nav from '@/components/Nav/Container'
import Brand from '@/components/Brand/Container'
import TourDates from '@/components/TourDates/Container'
import Contact from '@/components/Contact/Container'
import Footer from '@/components/Footer/Container'

import debounce = require('lodash/debounce')

const { useState, useEffect } = React

const useWindowPosition = (tasks: object) => {
  const [position, setPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setPosition({ left: event.pageX, top: event.pageY })
    }

    const handleWindowMouseMoveDebounced = debounce(handleWindowMouseMove, 200)

    window.addEventListener('mousemove', handleWindowMouseMoveDebounced)

    console.info('mounted and updated')

    return () => {
      console.info('unmount')

      // window.removeEventListener('mousemove', handleWindowMouseMoveDebounced)
    }
  }, [tasks])

  return position
}

const App = (props: any) => {
  const [todo, setTodo] = useState(props.todo)

  const position = useWindowPosition(todo)

	return (
    <>
      <h4>{position.left}/{position.top}</h4>
      <button onClick={() => setTodo({ a: props.todo.a + 1 })}>Increase task id</button>
			<Nav />
			<Header />
			<Brand />
			<TourDates />
			<Contact />
			<Footer />
      {/* <Story /> */}
    </>
	)
}

export default App
