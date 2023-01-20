import React, { useRef, useEffect } from "react";
import "./SecondYear.css";
import Prerna from "../../assets/Prerna.jpg";
import Aditya from "../../assets/Aditya.jpg";
import AniketDas from "../../assets/Aniket_Das.jpg";
import Aniket from "../../assets/Aniket.jpg";
import Rajdeep from "../../assets/Rajdeep.jpg";
import Soumik from "../../assets/Soumik.jpg";
import Tejas from "../../assets/Tejas.jpg";
import Tamoghna from "../../assets/Tamoghna.jpg";
import profile from "../../assets/profile.png";
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

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt2.current,options);
    VanillaTilt.init(tilt3.current,options);
    VanillaTilt.init(tilt4.current,options);
    VanillaTilt.init(tilt5.current,options);
    VanillaTilt.init(tilt6.current,options);
    VanillaTilt.init(tilt7.current,options);
    VanillaTilt.init(tilt8.current,options);
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <MetaData title="Second Year" />
      <StrengthNavbar name="second" />
      <div class="secondYearStrengthContainer">
        <h1 class="secondYear-title"></h1>
        <div class="secondYearStrengthBasket">
          <div class="secondYearStrengthCard" ref={tilt} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Prerna} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Prerna Sharma</h3>
              <p>MME</p>
              <h5>Contact Handles</h5>
              <p>+91 6295187168</p>
              <a href="https://www.facebook.com/profile.php?id=100076278952974">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/prerna13sharma/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt2} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Tamoghna} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Tamoghna Dutta</h3>
              <p>ME</p>
              <h5>Contact Handles</h5>
              <p>+91 7439706092</p>
              <a href="https://www.facebook.com/profile.php?id=100076938982610">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/tamoghna_dutta/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt3} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Rajdeep} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Rajdeep Saha</h3>
              <p>MME</p>
              <h5>Contact Handles</h5>
              <p>+91 9883487146</p>
              <a href="https://www.facebook.com/profile.php?id=100072838294525">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/instarajdeep/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard" ref={tilt4} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Aniket} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Aniket Kumar</h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>+91 8789518214</p>
              <a href="https://www.facebook.com/profile.php?id=100075359740072">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/aniket777984/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt5} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Tejas} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Tejas Sandwar</h3>
              <p>MME</p>
              <h5>Contact Handles</h5>
              <p>+91 9693808710</p>
              <a href="https://www.facebook.com/profile.php?id=100078248832807">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/tejassandwar/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt6} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Soumik} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Soumik Biswas</h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>+91 6290575119</p>
              <a href="https://www.facebook.com/sou.bis.9">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/_soumiik_/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt7} {...options}>
            <div class="secondYearStrengthContent">
              <img src={AniketDas} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Aniket Das</h3>
              <p>CSE</p>
              <h5>Contact Handles</h5>
              <p>+91 7044563803</p>
              <a href="https://www.facebook.com/profile.php?id=100015299378060">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/not_aniket_/">
              <i class="fa fa-instagram instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="secondYearStrengthCard"  ref={tilt8} {...options}>
            <div class="secondYearStrengthContent">
              <img src={Aditya} alt="aniket" />
              {/* <img src={profile} alt="aniket" /> */}
              <h3>Aditya Raj</h3>
              <p>EE</p>
              <h5>Contact Handles</h5>
              <p>+91 8340183323</p>
              <a href="https://www.facebook.com/profile.php?id=100073591507023">
              <i class="fa fa-facebook facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/adityagupta.1701/">
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
