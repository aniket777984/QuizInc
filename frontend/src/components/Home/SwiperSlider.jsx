import React, { useState } from "react";
import { Link } from "react-router-dom";
import buisness from "../../assets/events/business.jpeg";
import sports from "../../assets/events/sports.jpeg";
import fandom from "../../assets/events/fandom.jpeg";
import geopolitics from "../../assets/events/geopolitics.jpeg";
import qmanji from "../../assets/events/qmanji.jpeg";
import bidbash from "../../assets/events/bidbash.jpeg";
import ott_sitcom from "../../assets/events/ott_sitcom.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

import "./SwiperSlider.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlider = () => {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sports} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={qmanji} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fandom} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={geopolitics} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={buisness} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bidbash} alt="Niket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ott_sitcom} alt="Niket" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
