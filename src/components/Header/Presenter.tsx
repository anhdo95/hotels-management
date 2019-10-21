import * as React from 'react'

import './style.scss'

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
  componentDidMount() {
  }

  render() {
    return (
      <header className="rel header">
        <figure className="header__figure">
          <section className="abs abs-horizontal-center align-c header__content">
            <h2 className="sub-heading header__city">Chiago</h2>
            <p className="description header__description">Thank you, Chiago - A night we won’t forget.</p>
          </section>
        </figure>
      </header>
    )
  }
}
