import React from "react";
import Menu from "./Menu.js";
import styled from "styled-components";

import "./Home.css";

export default function About() {
  return (
    <div className="About">
      <Menu />
      <div>About Page</div>
      <svg
        className="bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2F2E41"
          fill-opacity="1"
          d="M0,96L0,96L480,96L480,160L960,160L960,224L1440,224L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
