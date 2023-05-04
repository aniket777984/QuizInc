import React, { useRef, useEffect } from "react";
import "./SecondYear.css";

import anamitra from "../../assets/first/anamitra.jpg";
import ankan from "../../assets/first/ankan.jpg";
import ankit from "../../assets/first/ankit.jpg";
import annwesha from "../../assets/first/annwesha.jpg";
import arin from "../../assets/first/arin.jpg";
import bose from "../../assets/first/bose.jpg";
import prashant from "../../assets/first/prashant.jpg";
import ramesh from "../../assets/first/ramesh.jpg";
import souvik from "../../assets/first/souvik.jpg";
import srijan from "../../assets/first/srijan.jpg";
import sriharshita from "../../assets/first/sriharshita.jpg";

import StrengthNavbar from "./StrengthNavbar";
import MetaData from "../layout/MetaData";
import VanillaTilt from "vanilla-tilt";

const SecondYear = () => {

  const options = {
    scale: 1,
    speed: 1000,
    max: 10,
  };
  const tilt = useRef(null);
  const tilt2 = useRef(null);
  const tilt3 = useRef(null);
  const tilt4 = useRef(null);
  const tilt5 = useRef(null);
  const tilt6 = useRef(null);
  const tilt7 = useRef(null);
  const tilt8 = useRef(null);
  const tilt9 = useRef(null);
  const tilt10 = useRef(null);
  const tilt11 = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt2.current,options);
    VanillaTilt.init(tilt3.current,options);
    VanillaTilt.init(tilt4.current,options);
    VanillaTilt.init(tilt5.current,options);
    VanillaTilt.init(tilt6.current,options);
    VanillaTilt.init(tilt7.current,options);
    VanillaTilt.init(tilt8.current,options);
    VanillaTilt.init(tilt9.current,options);
    VanillaTilt.init(tilt10.current,options);
    VanillaTilt.init(tilt11.current,options);
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <MetaData title="Second Year" />
      <StrengthNavbar name="first" />
      <div class="secondYearStrengthContainer">
        <h1 class="secondYear-title"></h1>
        <div class="secondYearStrengthBasket">
          <div class="secondYearStrengthCard" ref={tilt} {...options}>
            <div class="secondYearStrengthContent">
              <img src={ankit} alt="aniket" />
              <h3>Ankit Pratap</h3>
              <p>EE</p>
              <h5>Contact Handles</h5>
              <p>8434259139</p>
              <a href="https://www.facebook.com/ankitpratap04">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/ankitxpratap?igshid=YzQ5NzA2ZmU=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt2} {...options}>
            <div class="secondYearStrengthContent">
              <img src={ramesh} alt="aniket" />
              <h3>Ramesh Ghorai</h3>
              <p>CH</p>
              <h5>Contact Handles</h5>
              <p>8637884355</p>
              <a href="https://www.facebook.com/ramesh.ghorai.940">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/7r_vip_nomadic?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt3} {...options}>
            <div class="secondYearStrengthContent">
              <img src={arin} alt="aniket" />
              <h3>Arin Pramanick</h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>8337003108</p>
              <a href="https://www.facebook.com/arin.pramanick.9?mibextid=ZbWKwL">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/_.arinn..?igshid=YmMyMTA2M2Y=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt4} {...options}>
            <div class="secondYearStrengthContent">
              <img src={souvik} alt="aniket" />
              <h3>Souvik Sarkar</h3>
              <p>BT</p>
              <h5>Contact Handles</h5>
              <p>8927977589</p>
              <a href="https://www.facebook.com/profile.php?id=100091663810969&mibextid=ZbWKwL">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href=" https://instagram.com/svksrk_07?igshid=NzMyMjgxZWIzNw==">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt5} {...options}>
            <div class="secondYearStrengthContent">
              <img src={srijan} alt="aniket" />
              <h3>Srijan Chowdhury </h3>
              <p>CE</p>
              <h5>Contact Handles</h5>
              <p>9062030202</p>
              <a href="https://www.facebook.com/srijanchowdhury.srijan.3">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/cheeztacos?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt6} {...options}>
            <div class="secondYearStrengthContent">
              <img src={ankan} alt="aniket" />
              <h3>Ankan Kumar Kundu</h3>
              <p>ME</p>
              <h5>Contact Handles</h5>
              <p>8583811419</p>
              <a href="https://www.facebook.com/profile.php?id=100085260829235">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/ankan_kk?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt7} {...options}>
            <div class="secondYearStrengthContent">
              <img src={anamitra} alt="aniket" />
              <h3>Anamitra Hazra</h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>8240518231</p>
              <a href="https://m.facebook.com/anamitra.hazra.9">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/deadlovepoetry/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt8} {...options}>
            <div class="secondYearStrengthContent">
              <img src={annwesha} alt="aniket" />
              <h3>Annwesha Naskar</h3>
              <p>ECE</p>
              <h5>Contact Handles</h5>
              <p>8777577047</p>
              <a href="#">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/annwesha_naskar?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt9} {...options}>
            <div class="secondYearStrengthContent">
              <img src={sriharshita} alt="aniket" />
              <h3>Ananthula Sriharshitha </h3>
              <p>ME</p>
              <h5>Contact Handles</h5>
              <p>6305970670</p>
              <a href="#">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/ananthulasriharshitha?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt10} {...options}>
            <div class="secondYearStrengthContent">
              <img src={prashant} alt="aniket" />
              <h3>Begari Prashanth </h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>9666412497</p>
              <a href="https://www.facebook.com/profile.php?id=100045802243068&mibextid=ZbWKwL">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/prashanth_annaa?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt11} {...options}>
            <div class="secondYearStrengthContent">
              <img src={bose} alt="aniket" />
              <h3>Siddhanth Bose</h3>
              <p>ME</p>
              <h5>Contact Handles</h5>
              <p>8583922889</p>
              <a href="#">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/rik0654?igshid=ZDdkNTZiNTM=">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

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

    </>
  );
};

export default SecondYear;
