import * as React from 'react'
import { RouteComponentProps, match } from 'react-router-dom'
import Slider, { LazyLoadTypes } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'


interface PresenterProps extends RouteComponentProps {
  getHotel: (id: string) => Promise<any>,
  match: match<{ hotelId: string }>
}

interface PresenterState {
  hotel: any
}


class Presenter extends React.PureComponent<PresenterProps, PresenterState> {
  constructor(props: PresenterProps) {
    super(props)

    this.state = {
      hotel: {}
    }

  }

  componentDidMount() {
    this.getHotel()
  }

  get sliderSettings() {
    const lazyLoad:LazyLoadTypes = 'ondemand'

    return {
      dots: true,
      infinite: true,
      autoplay: true,
      swipeToSlide: true,
      lazyLoad,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }

  async getHotel() {
    const hotel = await this.props.getHotel(this.props.match.params.hotelId)

    this.setState({ hotel })
  }

  render() {
    const { hotel } = this.state

    return (
      <div className="hotel-detail">
        <div className="hotel-detail__slider">
          <Slider {...this.sliderSettings}>
            {hotel.images && hotel.images.map((image: any, index: number) => (
              <div key={index}>
                <img src={image.url} alt={image.name} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hotel-detail__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, veritatis maiores voluptatibus veniam aliquid consequuntur perspiciatis inventore nostrum dicta cum dolore laboriosam aut excepturi quisquam eius eaque deserunt? Ratione, aspernatur.
        </div>
      </div>
    )
  }
}

export default Presenter
