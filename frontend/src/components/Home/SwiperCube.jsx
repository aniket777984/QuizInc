import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import two from "../../assets/2nd.jpg";
import three from "../../assets/3rd.jpg";
import four from "../../assets/4th.jpg";
import alumini from "../../assets/alumni.jpg";
import { EffectCube, Pagination } from "swiper";

import "./SwiperCube.css"

const SwiperCube = () => {
  return (
    <div className="strength-cube">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={two} alt="aniket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={three} alt="aniket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={four} alt="aniket" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={alumini} alt="aniket" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperCube