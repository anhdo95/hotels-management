import * as React from 'react'

import './style.scss'

interface PresenterProps {

}

export default class Presenter extends React.Component<PresenterProps> {
  componentDidMount() {
  }

  render() {
    return (
      <section className="tour-dates">
        <div className="container tour-dates__inner">
          <header className="align-c tour-dates__header">
            <h1 className="heading tour-dates__heading">Tour Dates</h1>
            <p className="quote tour-dates__quote">Remember to book your tickets!</p>
          </header>
          <div className="tour-dates__tours">
            <div className="tour-dates__tour tour-dates__tour--sold-out">
              <span className="tour-dates__tour-month">September</span>
              <span className="tour-dates__tour-status">Sold out</span>
            </div>

            <div className="tour-dates__tour tour-dates__tour--sold-out">
              <span className="tour-dates__tour-month">October</span>
              <span className="tour-dates__tour-status">Sold out</span>
            </div>

            <div className="tour-dates__tour">
              <span className="tour-dates__tour-month">November</span>
              <span className="tour-dates__tour-status">3</span>
            </div>
          </div>
          <div className="tour-dates__cities">
            <a className="flex-column tour-dates__city" href="#">
              <figure className="tour-dates__city-figure">
                <img className="abs-full tour-dates__city-image" src="/assets/images/newyork.jpg" alt="New York" />
              </figure>
              <div className="tour-dates__city-content">
                <section className="flex-column tour-dates__city-content-inner">
                  <h4 className="tour-dates__city-name">New York</h4>
                  <p className="tour-dates__city-date">Fri 28 Now 2019</p>
                  <p className="description tour-dates__city-description">
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <div>
                    <button className="button tour-dates__buy-tickets">Buy Tickets</button>
                  </div>
                </section>
              </div>
            </a>

            <a className="flex-column tour-dates__city" href="#">
              <figure className="tour-dates__city-figure">
                <img className="abs-full tour-dates__city-image" src="/assets/images/newyork.jpg" alt="New York" />
              </figure>
              <div className="tour-dates__city-content">
                <section className="flex-column tour-dates__city-content-inner">
                  <h4 className="tour-dates__city-name">New York</h4>
                  <p className="tour-dates__city-date">Fri 28 Now 2019</p>
                  <p className="description tour-dates__city-description">
                    Praesent tincidunt sed tellus.
                  </p>
                  <div>
                    <button className="button tour-dates__buy-tickets">Buy Tickets</button>
                  </div>
                </section>
              </div>
            </a>

            <a className="flex-column tour-dates__city" href="#">
              <figure className="tour-dates__city-figure">
                <img className="abs-full tour-dates__city-image" src="/assets/images/newyork.jpg" alt="New York" />
              </figure>
              <div className="tour-dates__city-content">
                <section className="flex-column tour-dates__city-content-inner">
                  <h4 className="tour-dates__city-name">New York</h4>
                  <p className="tour-dates__city-date">Fri 28 Now 2019</p>
                  <p className="description tour-dates__city-description">
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo. Praesent tincidunt sed tellus ut rutrum sed vitae justo
                  </p>
                  <div>
                    <button className="button tour-dates__buy-tickets">Buy Tickets</button>
                  </div>
                </section>
              </div>
            </a>
          </div>
        </div>
      </section>
    )
  }
}
