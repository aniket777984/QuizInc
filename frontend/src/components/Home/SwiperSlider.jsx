import React,{useState} from "react";
import {Link} from "react-router-dom";
// import biztech from '../../assets/Biztech.jpeg';
// import interNit from "../../assets/Inter-NIT.jpeg";
// import mela from "../../assets/MELA.jpeg";
// import school from "../../assets/School.jpeg";
// import Shatranj from "../../assets/Shatranj.jpeg";
// import Sports from "../../assets/Sports.jpeg";
import bmep from "../../assets/events/bmep.jpg";
import buisness from "../../assets/events/business.jpeg";
import eventlist from "../../assets/events/eventlist.jpeg";
import india from "../../assets/events/india.jpeg";
import mela from "../../assets/events/mela.jpeg";
import monopoly from "../../assets/events/monopoly.jpeg";
import sports from "../../assets/events/sports.jpeg";
// import {Dialog,DialogActions,DialogContent,DialogTitle,Button} from "@material-ui/core";



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

//Always write this important at last
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
          <img src={sports} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bmep} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mela} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={monopoly} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={india} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={buisness} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventlist} alt="Aniket" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default SwiperSlider;