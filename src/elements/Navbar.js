import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/icons/logo.svg";
import burger from "../assets/icons/burger.svg";
import NavLink from "./NavLink";

const Navbar = ({ match, blue }) => {

  const [toggle, setToggle] = useState(false);
  const getNavlink = (path) => {
    return match.path === path ? "font-bold" : "";
  };

  const LEFT = toggle ? 0 : -2000;

  const Slider = () => {
    return (
      <div
        className="h-screen w-3/4 absolute top-0 z-10 transition-all duration-500"
        style={{ backgroundColor: "#020308", left: LEFT  }}
      >
        <div className="flex justify-between items-center p-5">
          <p className="text-white text-lg">Smartek Sistem</p>
          <img
            src={burger}
            width={30}
            onClick={() => setToggle(!toggle)}
            alt="burger"
            className=""
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="flex flex-col py-10">
          <div className="py-2">
            <NavLink getNavlink={getNavlink} label="Home" path="/"></NavLink>
          </div>
          <div className="py-2">
            <NavLink
              getNavlink={getNavlink}
              label="About"
              path="/about"
            ></NavLink>
          </div>
          <div className="py-2">
            <NavLink
              getNavlink={getNavlink}
              label="Case Study"
              path="/study-case"
            ></NavLink>
          </div>
          <div className="py-2">
            <NavLink
              getNavlink={getNavlink}
              label="Contact"
              path="/contact"
            ></NavLink>
          </div>
          <div className="py-2">
            <NavLink
              getNavlink={getNavlink}
              label="Career"
              path="/career"
            ></NavLink>
          </div>
          <div className="py-2">
            <NavLink
              getNavlink={getNavlink}
              label="Outsourcing"
              path="/outsourcing"
              button
            ></NavLink>
          </div>
        </div>
      </div>
    );
  };

  if (blue) {
    return (
      <header
        className="flex items-center relative"
        style={{ height: 80, backgroundColor: "#1A237E" }}
      >
        <Slider className="transition-all duration-500"></Slider>
        <div className="container mx-auto px:10 md:px-20">
          <div className="flex justify-between items-center px-10 md:px-0">
            <img
              src={burger}
              width={30}
              onClick={() => setToggle(!toggle)}
              alt="burger"
              className="block md:hidden mr-auto"
              style={{ cursor: "pointer" }}
            />
            <img
              src={logo}
              width={55}
              alt="logo smartek"
              className="ml-auto md:ml-0"
            />
            <div className="flex items-center hidden md:block">
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
      className="flex justify-between items-center"
      style={{ height: 80 }}
    >
      <Slider></Slider>
      <img
        src={burger}
        width={30}
        onClick={() => setToggle(!toggle)}
        alt="burger"
        className="block md:hidden mr-auto"
        style={{ cursor: "pointer" }}
      />
      <img
        src={logo}
        width={55}
        alt="logo smartek"
        className="ml-auto md:ml-0"
      />
      <div className="flex items-center hidden md:block">
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
