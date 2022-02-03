import React from "react";
import "./Menu.css";
import styled from 'styled-components';
import MenuBar from "./images/menu-svgrepo-com.svg";

export default function Menu(currentPage) {
  function showMenu() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <div className="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2F2E41"
          fillOpacity="1"
          d="M0,96L0,96L480,96L480,160L960,160L960,224L1440,224L1440,0L960,0L960,0L480,0L480,0L0,0L0,0Z"
        ></path>
      </svg>
      <img src={MenuBar} onClick={showMenu} alt="menubar" />
      <div id="menus">
        <ul id="part1">
          <li className="Home">
            <Link to="/Home">Home</Link>
          </li>

          <li className="About">
            <Link to="./About.js">About</Link>
          </li>

          <li className="Contact">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <ul id="part2">
          <li className="Education">
            <Link to="/Education">Education</Link>
          </li>

          <li className="Portfolio">
            <Link to="/Portfolio">Portfolio</Link>
          </li>

          <li className="Work">
            <Link to="/Work">Work</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
