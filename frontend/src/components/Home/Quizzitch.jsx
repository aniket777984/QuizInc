import React from "react";
import "./Quizzitch.css";
import geeks from "../../assets/GeeksforGeeks.png";
import skillvertex from "../../assets/Skillvertex.jpeg";

import belgian from "../../assets/sponser/belgian.jpeg";
import legends from "../../assets/sponser/legends.jpeg";
import wonder from "../../assets/sponser/wonder.jpeg";
import yhills from "../../assets/sponser/yhills.jpeg";
import toi from "../../assets/sponser/toi.jpeg";
import unibic from "../../assets/sponser/unibic.jpeg";
import lemongrass from "../../assets/sponser/lemongrass.jpeg";
import Corizo from "../../assets/sponser/corizo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Quizzitch = () => {
  AOS.init({
    offset: 240,
    duration: 1000,
  });

  return (
    <div class="quizzitch-container">
      <div class="sponsor">
        <h1 class="sponsor-title">Quizzitch Cup Sponsers</h1>
        <div class="homeSkills">
          <div class="homeCubeSkills">
            <div class="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img src={toi} alt="Face1" />
            </div>
            <div class="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img src={unibic} alt="Face2" />
            </div>
            <div class="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img src={lemongrass} alt="Face3" />
            </div>
            <div class="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img src={Corizo} alt="Face4" />
            </div>
            <div class="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img src={geeks} alt="Face5" />
            </div>
            <div class="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img src={skillvertex} alt="Face6" />
            </div>
          </div>

          <div class="cubeShadow"></div>

          <div className="homeskillsQuizBox" data-aos="fade-left">
            <img className="homeskillBoximage" src={toi} alt="Face1" />
            <img className="homeskillBoximage" src={lemongrass} alt="Face1" />
            <img className="homeskillBoximage" src={unibic} alt="Face1" />
            <img className="homeskillBoximage" src={Corizo} alt="Face1" />
            <img className="homeskillBoximage" src={geeks} alt="Face1" />
          </div>
        </div>
        <div className="sponserdescription">
          <div className="sponserinnertext">
            <div className="sponserlistitem">
              <h3>Title Sponsor</h3>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
              <h2>The Times of India</h2>
            </div>
            <div className="sponserlistitem">
              <h3>Refreshment Partner</h3>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
              <h2>UNIBIC</h2>
            </div>
            <div className="sponserlistitem">
              <h3>Food Partner</h3>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
              <h2>Lemon Grass</h2>
            </div>
            <div className="sponserlistitem">
              <h3>Associate Sponsor</h3>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
              <h2>Corizo</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzitch;
