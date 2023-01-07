import React from "react";
import "./StrengthNavbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StrengthNavbar = ({ name }) => {

  

  useEffect(() => {

    const navLi = document.querySelectorAll("nav ul li");

    navLi.forEach((li) => {

      if(li.classList.contains(name)) {
        li.classList.add("active");
      }
    });

  }, []);

  var navbar = document.getElementById("aluminiNavbar");
  var menu = document.getElementById("menu");

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  document.onclick = function(e){
    if(e.target.id == "menuLink" || e.target.id == "menuLinkactual")
    document.getElementById("click").checked = false;
  }

  return (
    <>
      <nav id="aluminiNavbar">
        <img src={logo} class="logo" alt="Aniket" />
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul id="menu">
          <li className="second" id="menuLink" >
            <Link to="/strength/second" id="menuLinkactual">Second</Link>
          </li>
          <li className="third" id="menuLink" >
            <a href="/strength/third" id="menuLinkactual">Third</a>
          </li>
          <li className="fourth" id="menuLink">
            <a href="/strength/fourth" id="menuLinkactual">Fourth</a>
          </li>
          <li className="alumini" id="menuLink">
            <a href="/strength/alumini" id="menuLinkactual">Alumini</a>
          </li>
          <li className="home" id="menuLink">
            <a href="/" id="menuLinkactual">Home</a>
          </li>
          <li className="quizzitch" id="menuLink">
            <a href="/quizzitchcup" id="menuLinkactual">Quizzitch Cup</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default StrengthNavbar;
