import React from "react";
import background from "../../assets/images/hero.png";
import Navbar from "../../elements/Navbar";

import DOT from "../../assets/icons/dot.svg";
import arrow from "../../assets/icons/arrow.svg";

const Hero = () => {
  function showMore() {
    window.scrollTo({
      top: 0 + 700,
      behavior: "smooth",
    });
  }
  return (
    <div
      className="hero relative mx-auto"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="image-cover absolute inset-0 z-10"></div>
      <div className="absolute z-20 top-0 right-0 left-0 h-full">
        <div className="container px-0 md:px-20 mx-auto flex flex-col justify-between h-full">
          <Navbar></Navbar>
          <div className="text-left px-5 md:px-0">
            <p className="text-white mb-6">SMARTEK SISTEM</p>
            <h2 className="text-white text-5xl md:text-6xl">
              Expresses Enthusiasm <br /> for{" "}
              <span style={{ color: "#56CCF2" }}>Technology</span>
            </h2>
            <img src={DOT} className="mt-10" alt="dot icon" />
          </div>
          <div className="mb-20 flex justify-center">
            <img
              src={arrow}
              alt="arrow down"
              style={{ cursor: "pointer" }}
              onClick={() => showMore()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
