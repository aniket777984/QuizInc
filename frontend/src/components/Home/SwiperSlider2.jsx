import React from "react";

import india from "../../assets/sessional/india.png";
import quoriosity from "../../assets/sessional/qriosity.png";
import viral from "../../assets/sessional/viral.png";
import news from "../../assets/sessional/newspaper.jpg";
import frames from "../../assets/sessional/frames.png";
import screencast from "../../assets/sessional/screencast.jpg";
import flames from "../../assets/sessional/flames.jpg";



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

//Always write this important at last
import "./SwiperSlider2.css";
import logo from "../../assets/logo.png";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlider = ({title}) => {



  return (
    <div className="swiperSlidercontainer">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src={logo} alt="Aniket"/>
        </div>
        <div className="title_">
        <h4 className="title_actual" >{title}</h4>
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
          <img src={india} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>India Quiz</h1>
          <p>India Quiz, a quiz for the lovers of our country. If you’re interested in the arcane quirks of our country, this is the quiz you’ve been waiting for.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={quoriosity} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>Qriosity Quiz</h1>
          <p>In an effort to bring a new experience for the youngest students in our college, each year our club organizes a freshman quiz. This would be your chance to get a feel for what Quizzes are.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={screencast} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>The Screencast Quiz</h1>
          <p>If your idea of a perfect day is opening Netflix and binge watching on all shows, if you’re a part of multiple fandoms and subreddits are your haunt, the screencast quiz is for you.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={news} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>Newspaper Quiz</h1>
          <p>The Newspaper quiz judges all the participants’ ability to rummage through the Newspaper, read between the lines and outshine the others.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={frames} alt="Aniket" />
          <div className="slidercontentonhover">                          
          <h1>Of 24 Frames and 22 Yards Quiz</h1>
          <p>Our latest addition to the array of events, this quiz is a special one for all the Bollywood and Cricket lovers out there.</p>                     
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={flames} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>F.L.A.M.E.S. Quiz</h1>
          <p>Flames, a general quiz for all the arts, whether you’re an art or sports enthusiast, there is something for everyone in this quiz.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={viral} alt="Aniket" />
          <div className="slidercontentonhover">
          <h1>The Gone Viral Quiz</h1>
          <p>The session then continues with Gone Viral Quiz, which is a testimony to the fact that QuizInc doesn’t shy away from introducing new quizzing formats keeping in mind the general trends.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;