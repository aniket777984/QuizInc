import React, { Fragment} from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";

import Navbar from "./Navbar";
import SwiperSlider2 from "./SwiperSlider2";
import Office from "./Office";
import TimeLine from "../Strength/TimeLine";
import Iframe from "react-iframe";
import Qcupdated from "../../assets/QCupdated.png";
import Carousel from "react-material-ui-carousel";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
// import about3 from "../../assets/about3.jpg";
// import about4 from "../../assets/about4.jpg";
// import about5 from "../../assets/about5.jpg";
import qcupdatedlogo from "../../assets/qcupdatedlogofinal.png";
import photo1 from "../../assets/photo1.jpeg";
import photo2 from "../../assets/photo2.jpeg";
import photo3 from "../../assets/photo3.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    offset: 240,
    duration: 1000,
  });


  return (

        <Fragment>
          <MetaData title="QuizInc" />
          <div className="mainContentbox">
          <section id="home">
            <Navbar />
          </section>

          <section id="about">
            <h1 class="about-title" data-aos="fade-left">About Us</h1>
            <div class="about-us">
              <div class="about-text" data-aos="fade-right">
                <p className="abouttextmaintag">
                  Hey folks! QuizInc, the official quizzing club of NIT
                  Durgapur, welcomes all freshers. QuizInc provides an
                  incredible interactive platform for all those who are
                  endlessly curious and love exchanging ideas and knowledge. It
                  is indeed the "Knowledge Club" of NIT Durgapur.QuizInc was
                  started by two students Harsh Mohan and Anup Nair in 2003.
                </p>
                <p className="abouttextmaintag" >
                  Our objective? Promoting the culture of quizzing in our
                  campus.A club which remains active throughout the year,QuizInc
                  hosts a variety of quizzes every month.From collaborating with
                  other Nits, to holding interesting events, to witnessing
                  participants from reputed colleges all over kolkata and
                  Durgapur, QuizInc does it all. A community of dedicated
                  quizzers based in your college.
                </p>
              </div>
              <div class="about-img" data-aos="flip-up">
                <Carousel>
                <img className="CarouselImage" src={about1} alt="Aniket" />
                <img className="CarouselImage" src={about2} alt="Aniket" />
                <img className="CarouselImage" src={photo1} alt="Aniket" />
                <img className="CarouselImage" src={photo2} alt="Aniket" />
                <img className="CarouselImage" src={photo3} alt="Aniket" />
                </Carousel>
              </div>
            </div>
          </section>

          <section id="quizzitch">
            <div className="cup2022">
            <h1 class="quizzitch-title" data-aos="fade-right">Quizzitch Cup</h1>
            <div className="itch-cup">
              <div class="itch-img" data-aos="fade-right">
              <img src={qcupdatedlogo} alt="aniket" />
              </div>
               
              <div class="itch-text" data-aos="fade-left">
                <p className="quizzitchtextmaintag">
                  While QuizInc organizes quizzes all year, all of them
                  culminate into this huge extravaganza of quizzing, knowledge
                  and a healthy dose (read: overdose) of fun! With the advent of
                  the new decade, we are absolutely pumped about the first big
                  event of 2021: Quizzitch Cup! A festival full of relentless
                  information, knowledge and fun, Quizzitch Cup 2021 is a
                  celebration of an activity we all love: quizzing. With a huge
                  array of quizzes lined up to be hosted by QuizInc and attended
                  by schools and colleges from all over the Eastern region of
                  India, it just doesn't get any better!
                </p>
              </div>
            </div>
            <div className="exploremorewrapper">
              <a className="quizzitchPageLink" href="/quizzitchcup" >
                <h3>Explore More</h3>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
              </div>
            </div>
          </section>


          <section id="office">

            <div className="officesection">
              <h1 class="officeBearer-title" data-aos="fade-right">Office Bearers</h1>
              <Office />
            </div>

            <div id="strength">
              <h1 class="teamQuizInc-title" data-aos="fade-left">Team QuizInc</h1>
              <TimeLine />
            </div>

            <div className="swiperpart">
            <SwiperSlider2 title="Sessional Quizzes" />
            </div>

          </section>

          {/* <section id="session">
            
          </section> */}

          <div className="spaceP"></div>

          <section id="contact">
            <div className="getInTouchTitle">
              <h1 class="getInTouch-title" data-aos="fade-right">Get In Touch</h1>
            </div>
            <div class="get-in-touch">
              <div class="get-in-touch-content">
                <div class="contact-link" data-aos="zoom-in">
                  <div class="mobile">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <h6>+91 98314 49219</h6>
                  </div>
                  <div class="mobile">
                    <i class="fa-solid fa-house"></i>
                    <h6>
                      QuizInc NIT Durgapur, <br />
                      West Bengal 713209
                    </h6>
                  </div>
                  <div class="mobile">
                    <i class="fa-solid fa-envelopes-bulk"></i>
                    <a href="mailto:aniket777984@gmail.com">
                    <h6>
                      quizinc.nitdgp
                      <br />
                      @gmail.com
                    </h6>
                    </a>
                  </div>
                </div>
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5827920264283!2d87.29087901429281!3d23.54750360241535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d3d866877cf%3A0x21e96ef4f4ff9fd1!2sNIT%20Durgapur!5e0!3m2!1sen!2sin!4v1666699473603!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  data-aos="flip-up"
                ></Iframe>
              </div>
            </div>
          </section>

          <div class="footer">
            <div class="footer-container">
              <div class="footer-row">
                <div class="footer-col">
                  <div class="social-icon">
                    <a href="https://www.facebook.com/search/top?q=quizinc">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/quizincnitdgp/">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/quizinc/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <br />
                </div>
                <div class="copyright">
                  <h2>All rights reserved. Copyright © QuizInc 2023</h2>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Fragment>
  );
};

export default Home;
