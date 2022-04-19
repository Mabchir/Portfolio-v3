import React from "react";
import "./Menu.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Menu(currentPage) {
  return (
    <div className="menu">
      <svg
        className="upper"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2F2E41"
          fillOpacity="1"
          d="M0,96L0,96L480,96L480,160L960,160L960,224L1440,224L1440,0L960,0L960,0L480,0L480,0L0,0L0,0Z"
        ></path>
      </svg>
      <div id="menus">
        <nav id="part1">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/"
            key="home_page"
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/about"
            key="about_page"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/contact"
            key="contact_page"
          >
            Contact
          </NavLink>
        </nav>
        <nav id="part2">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/education"
            key="edu_page"
          >
            Education
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/portfolio"
            key="port_page"
          >
            Portfolio
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/work"
            key="work_page"
          >
            Work
          </NavLink>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
