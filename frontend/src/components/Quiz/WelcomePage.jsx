import React, { Fragment } from 'react';
import "./WelcomePage.css";
import logo from "../../assets/logo.png";
import MetaData from "../layout/MetaData";
import {Link} from "react-router-dom";

const WelcomePage = () => {
  return (
    <Fragment>
      <MetaData title="QuizInc" />
      <div class="welcome-hero">
        <div class="welcome-content">
            <img src={logo} alt="Aniket"  />
            <h4>QuizInc Welcomes You To Its Weekly Quiz Comptetion</h4>
            <Link to="/play/quiz" className='welcomepagebutton'>Proceed</Link>
        </div>
    </div>
    <div class="footer">
        <div class="footer-container">
          <div class="footer-row">
            <div class="footer-col">
              <div class="social-icon">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
              <br />
            </div>
            <div class="copyright">
              <h2>All rights reserved. Copyright © QuizInc 2022</h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default WelcomePage