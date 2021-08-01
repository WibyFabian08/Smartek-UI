import React, { useEffect } from "react";
import Navbar from "../elements/Navbar";
import Footer from "../parts/Footer";
import BodyOutsourcing from "../parts/outsourcing/BodyOutsourcing";
import HeroOutsourcing from "../parts/outsourcing/HeroOutsourcing";

const Outsourcing = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section>
      <div style={{ backgroundColor: "#1A237E" }}>
        <div className="container mx-auto px-5 md:px-20">
          <Navbar></Navbar>
          <HeroOutsourcing></HeroOutsourcing>
        </div>
      </div>
      <BodyOutsourcing></BodyOutsourcing>
      <Footer></Footer>
    </section>
  );
};

export default Outsourcing;
