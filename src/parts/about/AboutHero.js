import React from "react";

import about from "../../assets/images/about.png";

const AboutHero = () => {
  return (
    <section className="flex flex-wrap justify-center items-center mt-0 md:mt-20">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl mb-5">WHO WE ARE?</h2>
        <p className="text-sm text-gray-400 w-full md:w-9/12">
          SMARTEK is a creative and talented organization that expresses
          enthusiasm for technology with more than 5 years of experience. We
          help the industry optimize its business with effective and efficient
          technology solutions to transform and digitize their business
          processes. We used multiple and wide ranges of tech-stack to give the
          best performance from websites to mobile apps. Including enterprise
          architecture basis in analyze and scientific way approach
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div style={{ height: 288 }} className="relative hidden md:block">
          <div className="border-solid border-2 z-10 border-gray-400 absolute top-0 w-full h-full"></div>
          <img
            src={about}
            className="absolute -left-10 -bottom-10 z-20 w-full h-full object-cover"
            alt="about pict"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
