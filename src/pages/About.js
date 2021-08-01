import React, { useEffect } from "react";
import ContentTitle from "../elements/ContentTitle";
import Navbar from "../elements/Navbar";

import circle from "../assets/images/circle.svg";
import AboutHero from "../parts/about/AboutHero";
import WorkWithUs from "../parts/about/WorkWithUs";
import Footer from "../parts/Footer";
import Download from "../parts/about/Download";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="relative overflow-x-hidden">
      <img
        src={circle}
        width={100}
        className="absolute top-32 hidden md:block"
        alt=""
      />
      <Navbar blue></Navbar>
      <div className="container mx-auto px-5 md:px-20 py-20">
        <ContentTitle title="ABOUT US"></ContentTitle>
        <AboutHero></AboutHero>
      </div>
      <WorkWithUs></WorkWithUs>
      <Download></Download>
      <Footer></Footer>
    </section>
  );
};

export default About;
