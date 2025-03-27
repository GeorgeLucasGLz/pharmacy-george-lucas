import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../../assets/banner1.webp'
import Img2 from '../../assets/banner2.webp'
import Img3 from '../../assets/banner3.webp'
import Img4 from '../../assets/banner4.webp'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../HeroSection/style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {

  return (

    <>
      <section className="bg-gradient-to-r from-black to-blue-600 text-white py-20" id='banner' >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >


          <SwiperSlide><img src={Img1}></img></SwiperSlide>
          <SwiperSlide><img src={Img2} id='banner2'></img></SwiperSlide>
          <SwiperSlide><img src={Img3}></img></SwiperSlide>
          <SwiperSlide><img src={Img4}></img></SwiperSlide>
        </Swiper>

      </section >
    </>
  )

}

export default Hero

