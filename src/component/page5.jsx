import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from '../image/four1.jpg'
import Image1 from '../image/four2.jpg'
import Image2 from '../image/four3.jpg'
import Image3 from '../image/four4.jpg'
import Image4 from '../image/four5.jpg'
import Image5 from '../image/img4.jpg'
import 'swiper/css';

const Page5 = () => {
  return (
    <>
      <div className='container5'>
       <div className='headds'><span className='hum'>PREDEFINED FUNCTIONAL PAGES</span><br></br>
       <span>Fazfood has many pages like contact us, about us, about me, services,… with many styles is designed for each purpose of your works.
        </span></div>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay= {{
        delay: 1000,
        disableOnInteraction: false,
      }}
      
    >
      <SwiperSlide><img className='scroll-img' src={Image} alt="" /></SwiperSlide>
      <SwiperSlide><img className='scroll-img' src={Image1} alt="" /></SwiperSlide>
      <SwiperSlide><img className='scroll-img' src={Image2} alt="" /></SwiperSlide>
      <SwiperSlide><img className='scroll-img' src={Image3} alt=""/></SwiperSlide>
      <SwiperSlide><img className='scroll-img' src={Image4} alt="" /></SwiperSlide>
      <SwiperSlide><img className='scroll-img' src={Image5} alt=""/></SwiperSlide>
      
      ...
    </Swiper>
      </div>
    </>
  )
}

export default Page5
