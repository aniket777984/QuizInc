import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop) {
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
          <li className="2022" id="menuLink">
            <a href="#2022" id="menuLinkactual">2022</a>
          </li>
          <li className="2021" id="menuLink">
            <a href="#2021" id="menuLinkactual">2021</a>
          </li>
          <li className="2020" id="menuLink">
            <a href="#2020" id="menuLinkactual">2020</a>
          </li>
          <li className="2019" id="menuLink">
            <a href="#2019" id="menuLinkactual">2019</a>
          </li>
          <li className="2018" id="menuLink">
            <a href="#2018" id="menuLinkactual">2018</a>
          </li>
          <li className="2017" id="menuLink">
            <a href="#2017" id="menuLinkactual">2017</a>
          </li>
          <li className="2016" id="menuLink">
            <a href="#2016" id="menuLinkactual">2016</a>
          </li>
          <li className="2015" id="menuLink">
            <a href="#2015" id="menuLinkactual">2015</a>
          </li>
          <li className="2014" id="menuLink">
            <a href="#2014" id="menuLinkactual">2014</a>
          </li>
          <li className="home activeforever" id="menuLink">
            <a href="/" id="menuLinkactual">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
