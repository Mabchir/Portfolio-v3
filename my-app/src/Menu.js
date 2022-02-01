import React from "react";
import "./Menu.css";
import MenuBar from "./images/menu-svgrepo-com.svg";
export default function Menu() {
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
      <img src={MenuBar} onClick={showMenu} />

      <div id="menus">
        <ul id="part1">
          <a href="#">
            <li className="current">Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
        <ul id="part2">
          <a href="#">
            <li>Education</li>
          </a>
          <a href="#">
            <li>Portfolio</li>
          </a>
          <a href="#">
            <li>Work</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
