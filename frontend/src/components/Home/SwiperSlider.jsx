import React,{useState} from "react";
import {Link} from "react-router-dom";
import biztech from '../../assets/Biztech.jpeg';
import interNit from "../../assets/Inter-NIT.jpeg";
import mela from "../../assets/MELA.jpeg";
import school from "../../assets/School.jpeg";
import Shatranj from "../../assets/Shatranj.jpeg";
import Sports from "../../assets/Sports.jpeg";
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

import logo from "../../assets/logo.png";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlider = ({title}) => {


  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src={logo} alt="Aniket"/>
        </div>
        <div className="title_">
        <h4 className="title_actualheadtag" >{title}</h4>
        </div>
      </div>
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
          <img src={biztech} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>Exhibit your interests in the biggest entrepreneurial decisions to the latest technological advancements.</p>
            <a href="#" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={interNit} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>A battle among all the NITs across the country.</p>
            <a href="#" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mela} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>MELA (Music, Entertainment, Literature and Arts), is an acronym all quizzers hold dear, from amateurs to virtuosos.</p>
            <a href="#" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sports} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>One for the sports fanatics.</p>
            <a href="#" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={school} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>Quizinc hosts inter-school quizzes for the schools of West Bengal.</p>
            <a href="#" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shatranj} alt="Aniket" />
          <div className="slidercontentonhover">
            <p>A quiz that considers the links between political power, geography, and cultural diversity.</p>
            <a href="https://quizinc.co.in/" className="submitReview">Register</a>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default SwiperSlider;