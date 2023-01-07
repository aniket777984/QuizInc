import React from 'react';
import "./Quizzitch.css";
import geeks from "../../assets/GeeksforGeeks.png";
import booked from "../../assets/Boookd.jpeg";
import iim from "../../assets/2IIM.png";
import preBytes from "../../assets/prepbytes.png";
import stock from "../../assets/Stockgro.jpeg";
import skillvertex from "../../assets/Skillvertex.jpeg";
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
                        <img src={geeks} alt="Face1" />
                    </div>
                    <div class="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={booked} alt="Face2" />
                    </div>
                    <div class="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={iim} alt="Face3" />
                    </div>
                    <div class="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={preBytes} alt="Face4" />
                    </div>
                    <div class="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={stock} alt="Face5" />
                    </div>
                    <div class="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skillvertex} alt="Face6" />
                    </div>
                </div>
        
                <div class="cubeShadow"></div>

                <div className="homeskillsQuizBox" data-aos="fade-left">
                <img className='homeskillBoximage' src={booked} alt="Face1" />
                <img className='homeskillBoximage' src={iim} alt="Face1" />
                <img className='homeskillBoximage' src={preBytes} alt="Face1" />
                <img className='homeskillBoximage' src={stock} alt="Face1" />
                <img className='homeskillBoximage' src={skillvertex} alt="Face1" />
                </div>
        
            </div>
            <div className="sponserdescription">
                <div className="sponserinnertext">
                    <div className="sponserlistitem">
                        <h3>Title Sponser</h3>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <h2>Skill vertex</h2>
                    </div>
                    <div className="sponserlistitemmiddle">
                        <h3>Event Partner</h3>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <h2>Stock Grow</h2>
                    </div>
                    <div className="sponserlistitem">
                        <h3>Edutainment Partner</h3>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <h2>boooKD</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quizzitch