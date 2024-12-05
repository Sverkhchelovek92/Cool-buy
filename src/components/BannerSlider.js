import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '../img/01.png'
import slide2 from '../img/02.png'
import slide3 from '../img/03.png'
import slide4 from '../img/04.png'
import slide5 from '../img/05.png'
import slide6 from '../img/06.png'

function BannerSlider() {
  const banners = [
    { id: 1, src: slide1, alt: 'Banner 1' },
    { id: 2, src: slide2, alt: 'Banner 2' },
    { id: 3, src: slide3, alt: 'Banner 3' },
    { id: 4, src: slide4, alt: 'Banner 4' },
    { id: 5, src: slide5, alt: 'Banner 5' },
    { id: 6, src: slide6, alt: 'Banner 6' },
  ]

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="banner-slider-swiper"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.src} alt={banner.alt} style={{ width: '100%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerSlider
