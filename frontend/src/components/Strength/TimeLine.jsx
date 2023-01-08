import React from "react";
import "./TimeLine.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
              <Link to="/strength/second" className="timelinelinksforstrength">
                <div class="timeline-content" >
                  <h1>Second Year</h1>
                </div>
              </Link>
            </li>
            <li className="third-year">
              <Link to="/strength/third" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <h1>Third Year</h1>
                </div>
              </Link>
            </li>
            <li className="fourth-year">
              <Link to="/strength/fourth" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <h1>Fourth Year</h1>
                </div>
              </Link>
            </li>
            <li className="alumini-section">
              <Link to="/strength/alumini" className="timelinelinksforstrength">
                <div class="timeline-content">
                  <h1>Alumni Strength</h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TimeLine;


// data-aos="fade-right"