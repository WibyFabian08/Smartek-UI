import React, { useEffect } from "react";

import BestProject from "../parts/home/BestProject";
import Client from "../parts/home/Client";
import CovidInfo from "../parts/home/CovidInfo";
import Discussion from "../parts/home/Duscussion";
import Footer from "../parts/Footer";
import Hero from "../parts/home/Hero";
import Motto from "../parts/home/Motto";
import Product from "../parts/home/Product";
import Services from "../parts/home/Services";
import Tools from "../parts/home/Tools";

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <section className="overflow-hidden">
      <Hero></Hero>
      <Motto></Motto>
      <CovidInfo></CovidInfo>
      <Services></Services>
      <BestProject></BestProject>
      <Client></Client>
      <Tools></Tools>
      <Product></Product>
      <Discussion></Discussion>
      <Footer></Footer>
    </section>
  );
};

export default Home;
