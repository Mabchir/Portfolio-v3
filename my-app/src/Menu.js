import React from "react";
import "./Menu.css";
// import { Outlet, NavLink } from "react-router-dom";

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
        <nav id="part1">
          <li className="Home">
            <a href="./Home.js">Home</a>
          </li>

          {/* <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "underline" : "",
              };
            }}
            to={`/home`}
            
          >
            Home{" "}
          </NavLink> */}

          <li className="About">
            <a href="./About.js">About</a>
          </li>

          <li className="Contact">
            <a href="./About.js">Contact</a>
          </li>
        </nav>
        <nav id="part2">
          <li className="Education">
            <a href="./About.js">Education</a>
          </li>

          <li className="Portfolio">
            <a href="./About.js">Portfolio</a>
          </li>

          <li className="Work">
            <a href="./About.js">Work</a>
          </li>
        </nav>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
