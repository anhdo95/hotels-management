import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

function init(initialCount: any) {
  return { count: initialCount }
}

const initialState = { count: 0 }

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		case 'reset':
			return init(action.payload)
		default:
			throw new Error()
	}
}

const Presenter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const inputRef = React.useRef(null)

  const handleButtonFocus = () => {
    inputRef.current.focus()
  }

  const handleReset = () => {
    dispatch({ type: 'reset', payload: 10 })
  }

	return (
		<nav className="nav">
			<h3>{state.count}</h3>
      <input type="text" ref={inputRef} />
			<ul className="nav__links">
				<li className="nav__link">
					<a className="link nav__anchor" href="#" onClick={handleButtonFocus}>
						Home
					</a>
				</li>
				<li className="nav__link">
					<a className="link nav__anchor" href="#" onClick={handleReset}>
						Brand
					</a>
				</li>
				<li className="nav__link">
					<a className="link nav__anchor" href="/">
						Tour
					</a>
				</li>
				<li className="nav__link">
					<a className="link nav__anchor" href="/">
						Contact
					</a>
				</li>
				<li className="nav__link">
					<a className="link nav__anchor" href="/">
						More <FontAwesomeIcon icon={faCaretDown} />
					</a>
					<ul className="nav__dropdown">
						<li>
							<a className="dropdown-link nav__dropdown-link" href="/">
								Merchandise
							</a>
						</li>
						<li>
							<a className="dropdown-link nav__dropdown-link" href="/">
								Merchandise
							</a>
						</li>
						<li>
							<a className="dropdown-link nav__dropdown-link" href="/">
								Merchandise
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<div className="flex-center nav__right">
				<a className="nav__search" href="/">
					<FontAwesomeIcon icon={faSearch} />
				</a>
			</div>
		</nav>
	)
}

export default Presenter
