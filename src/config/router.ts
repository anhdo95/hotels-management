import Content from '@/components/Content/Container'
import HotelDetail from '@/components/HotelDetail/Container'

export default [
  { path: '/hotel/:hotelId', component: HotelDetail },
  { path: '/', component: Content },
]
