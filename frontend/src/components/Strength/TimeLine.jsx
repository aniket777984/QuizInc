import React from "react";
import "./TimeLine.css";
import second from "../../assets/2nd.jpg";
import third from "../../assets/3rd.jpg";
import fourth from "../../assets/4th.jpg";
import alumni from "../../assets/alumni.jpg";

import AOS from "aos";
import "aos/dist/aos.css";


const TimeLine = () => {

  AOS.init({
    offset: 240,
    duration: 1000,
  });

  return (
    <>
      <div class="strengthTimelineContainer">
        <div class="strengthTimeline">
          <ul>
            <li className="second-year">
              <a href="/strength/second" className="timelinelinksforstrength">
                <div class="timeline-content" >
                  <div className="timeline-year-logo">
                    <img src={second} alt="second" />
                  </div>
                  <h1>Second Year</h1>
                </div>
              </a>
            </li>
            <li className="third-year">
              <a href="/strength/third" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <div className="timeline-year-logo">
                    <img src={third} alt="second" />
                  </div>
                  <h1>Third Year</h1>
                </div>
              </a>
            </li>
            <li className="fourth-year">
              <a href="/strength/fourth" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <div className="timeline-year-logo">
                    <img src={fourth} alt="second" />
                  </div>
                  <h1>Fourth Year</h1>
                </div>
              </a>
            </li>
            <li className="alumini-section">
              <a href="/strength/alumini" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <div className="timeline-year-logo">
                    <img src={alumni} alt="second" />
                  </div>
                  <h1>Alumni Strength</h1>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TimeLine;


// data-aos="fade-right"