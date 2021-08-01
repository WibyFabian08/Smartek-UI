import React from "react";

import out from "../../assets/images/out.png";
import Button from "../../elements/Button";


const HeroOutsourcing = () => {
  return (
    <div className="px-5 md:px-10 py-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <p className="text-white mb-10">OUTSOURCING</p>
          <h2 className="text-white text-3xl font-bold mb-10">
            Spending too much time looking <br /> for IT partner in Indonesia,{" "}
            <br /> instead of focusing on your <br /> business?
          </h2>
          <Button label="Talk to us"></Button>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative" style={{ height: 339 }}>
            <div className="border-solid border-2 hidden md:block border-gray-400 h-full w-full"></div>
            <img
              src={out}
              className="w-full object-cover absolute bottom-10 md:-top-5 left-0 md:-left-5"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOutsourcing;
