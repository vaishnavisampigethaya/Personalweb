import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../CSS/Header.css";
import logo from "./download.jpg";
export default function Header(props) {
  return (
    <div className="header">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={logo} alt="Think" width="75px" height="75px" />
        </Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              to="/Personalweb"
              style={{ textDecoration: "none" }}
              activeClassName="text-white"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ textDecoration: "none" }}
              activeClassName="text-white"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none" }}
              activeClassName="text-white"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              style={{ textDecoration: "none" }}
              activeClassName="text-white"
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
