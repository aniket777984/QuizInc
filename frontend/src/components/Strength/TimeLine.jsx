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
                <div class="timeline-content" data-aos="fade-right">
                  <h1>Second Year</h1>
                  <p className="timelineptagleft">
                    They mostly carry out all the promotional work and handles all
                    the post made in the social media handles of QuizInc.
                  </p>
                </div>
              </Link>
            </li>
            <li className="third-year">
              <Link to="/strength/third" className="timelinelinksforstrength">
                <div class="timeline-content" data-aos="fade-left">
                  <h1>Third Year</h1>
                  <p className="timelineptagright">
                    They guide the second years through all theirs works and play major role in hosting all kind of events done by the club.
                  </p>
                </div>
              </Link>
            </li>
            <li className="fourth-year">
              <Link to="/strength/fourth" className="timelinelinksforstrength">
                <div class="timeline-content" data-aos="fade-right">
                  <h1>Fourth Year</h1>
                  <p className="timelineptagleft">
                    They are the pioneers of the club. They see through all the permissions and sponsorphip needed for the club to function and host events.
                  </p>
                </div>
              </Link>
            </li>
            <li className="alumini-section">
              <Link to="/strength/alumini" className="timelinelinksforstrength">
                <div class="timeline-content" data-aos="fade-left">
                  <h1>Alumini Strength</h1>
                  <p className="timelineptagright">
                    Its Aluminies are the major proud for all kind of organisation and same is for our club.
                  </p>
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
