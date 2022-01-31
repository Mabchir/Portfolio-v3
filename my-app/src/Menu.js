import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="Menu">
      Download
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2F2E41"
          fill-opacity="1"
          d="M0,96L0,96L480,96L480,160L960,160L960,224L1440,224L1440,0L960,0L960,0L480,0L480,0L0,0L0,0Z"
        ></path>
      </svg>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Education</li>
        <li>Portfolio</li>
        <li>Work</li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2F2E41"
          fill-opacity="1"
          d="M0,96L0,96L480,96L480,160L960,160L960,224L1440,224L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
