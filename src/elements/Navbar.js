import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/icons/logo.svg";
import NavLink from "./NavLink";

const Navbar = ({ match, blue }) => {
  const getNavlink = (path) => {
    return match.path === path ? "font-bold" : "";
  };

  if (blue) {
    return (
      <header
        className="invisible md:visible flex items-center"
        style={{ height: 80, backgroundColor: "#1A237E" }}
      >
        <div className="container mx-auto px-20">
          <div className="flex justify-between items-center">
            <img src={logo} width={55} alt="logo smartek" />
            <div className="flex items-center">
              <NavLink getNavlink={getNavlink} label="Home" path="/"></NavLink>
              <NavLink
                getNavlink={getNavlink}
                label="About"
                path="/about"
              ></NavLink>
              <NavLink
                getNavlink={getNavlink}
                label="Case Study"
                path="/study-case"
              ></NavLink>
              <NavLink
                getNavlink={getNavlink}
                label="Contact"
                path="/contact"
              ></NavLink>
              <NavLink
                getNavlink={getNavlink}
                label="Career"
                path="/career"
              ></NavLink>
              <NavLink
                getNavlink={getNavlink}
                label="Outsourcing"
                path="/outsourcing"
                button
              ></NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header
      className="flex justify-between items-center invisible md:visible"
      style={{ height: 80 }}
    >
      <img src={logo} width={55} alt="logo smartek" />
      <div className="flex items-center">
        <NavLink getNavlink={getNavlink} label="Home" path="/"></NavLink>
        <NavLink getNavlink={getNavlink} label="About" path="/about"></NavLink>
        <NavLink
          getNavlink={getNavlink}
          label="Case Study"
          path="/study-case"
        ></NavLink>
        <NavLink
          getNavlink={getNavlink}
          label="Contact"
          path="/contact"
        ></NavLink>
        <NavLink
          getNavlink={getNavlink}
          label="Career"
          path="/career"
        ></NavLink>
        <NavLink
          getNavlink={getNavlink}
          label="Outsourcing"
          path="/outsourcing"
          button
        ></NavLink>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
