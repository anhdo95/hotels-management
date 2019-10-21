import * as React from 'react'

import './style.scss'

interface PresenterProps {
  getTodos: () => {}
}

export default class Presenter extends React.Component<PresenterProps> {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <section className="brand">
        <div className="container brand__inner">
          <header className="align-c brand__header">
            <h1 className="heading">The Brand</h1>
            <p className="quote brand__quote">We love music</p>
          </header>
          <p className="description brand__description">
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="brand__members">
            <div className="align-c brand__member">
              <p className="brand__member-name">Richard Do</p>
              <figure className="brand__member-avatar">
                <img className="abs-full brand__member-image" src="/assets/images/brand-member-name.jpg" alt="Richard Do" />
              </figure>
            </div>

            <div className="align-c brand__member">
              <p className="brand__member-name">Richard Do</p>
              <figure className="brand__member-avatar">
                <img className="abs-full brand__member-image" src="/assets/images/brand-member-name.jpg" alt="Richard Do" />
              </figure>
            </div>

            <div className="align-c brand__member">
              <p className="brand__member-name">Richard Do</p>
              <figure className="brand__member-avatar">
                <img className="abs-full brand__member-image" src="/assets/images/brand-member-name.jpg" alt="Richard Do" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
