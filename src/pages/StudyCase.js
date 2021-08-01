import React, { useEffect } from "react";
import ContentTitle from "../elements/ContentTitle";
import Navbar from "../elements/Navbar";
import Footer from "../parts/Footer";
import ProductApp from "../parts/studyCase/ProductApp";

import cases from "../json/case";

const StudyCase = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="overflow-y-hidden">
      <Navbar blue></Navbar>
      <div className="py-20">
        <ContentTitle
          title="CASE STUDY"
          subTitle="Expert with Experience"
        ></ContentTitle>
        <section className="flex flex-wrap items-center mt-20">
          {cases &&
            cases.map((data, index) => {
              return (
                <ProductApp
                  key={index}
                  data={data}
                  genap={data.id % 2 === 0 ? true : false}
                ></ProductApp>
              );
            })}
        </section>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default StudyCase;
