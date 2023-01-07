import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      // const sectionHeight =  section.clientHeight;
      if (window.pageYOffset >= sectionTop - 250) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });

  var navbar = document.getElementById("navbar");
  var menu = document.getElementById("menu");

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  const check = document.getElementById("click");

  document.onclick = function (e) {
    if (e.target.id == "menuLink" || e.target.id == "menuLinkactual")
      document.getElementById("click").checked = false;
  };

  return (
    <div class="hero">
      <nav id="navbar">
        <img src={logo} class="logo" alt="Aniket" />
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul id="menu">
          <li className="home" id="menuLink">
            <Link to="#home" id="menuLinkactual">
              Home
            </Link>
          </li>
          <li className="about" id="menuLink">
            <a href="#about" id="menuLinkactual">
              About
            </a>
          </li>
          <li className="quizzitch" id="menuLink">
            <a href="#quizzitch" id="menuLinkactual">
              Quizzitch Cup
            </a>
          </li>
          <li className="office" id="menuLink">
            <a href="#office" id="menuLinkactual">
              Strength
            </a>
          </li>
          <li className="contact" id="menuLink">
            <a href="#contact" id="menuLinkactual">
              Contact
            </a>
          </li>
          <li className="account" id="menuLink">
            <a href="/account" id="menuLinkactual">
              Quiz
            </a>
          </li>
          <li className="quizink" id="menuLink">
            <a href="https://quizinc.co.in/quizink/" id="menuLinkactual">
              QuizInk
            </a>
          </li>
        </ul>
      </nav>
      <div class="content">
        <h1>QuizInc</h1>
        <h4>
          The Official Quizzing Club Of <br /> NIT Durgapur
        </h4>
        <div className="homepagelinks">
        <a href="#about" className="homepageexploremore">
          <h3>Explore More</h3>
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
