import React from "react";
import mobile from "../../assets/images/mobile.png";

const BestProject = () => {
  return (
    <section
      className="container px-5 md:px-20 mx-auto md:mt-36 relative"
      style={{ height: 329 }}
    >
      <div
        className="flex items-center md:py-10 px-2 md:px-10 h-full rounded-2xl"
        style={{ backgroundColor: "#1A237E" }}
      >
        <div className="w-3/4 flex flex-col justify-between">
          <p style={{ color: "#56CCF2" }} className="mb-5">
            BEST PROJECT
          </p>
          <h2 className="text-2xl md:text-3xl text-white mb-5">
            1 month of work and 5000 downloads <br /> within 3 weeks
          </h2>
          <p className="text-white">Travoy Apps - Jasamarga</p>
        </div>
        <img
          src={mobile}
          alt="mobile app"
          width={332}
          className="absolute right-52 bottom-0 invisible md:visible"
        />
      </div>
    </section>
  );
};

export default BestProject;
