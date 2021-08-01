import React from "react";
import Button from "../../elements/Button";
import covid1 from "../../assets/images/covid1.svg";
import covid2 from "../../assets/images/covid2.svg";

const CovidInfo = () => {
  return (
    <section
      className="relative flex bg-purple-600"
      style={{ height: 365, backgroundColor: "#1A237E" }}
    >
      <img
        src={covid1}
        width={250}
        className="absolute right-10 top-5"
        alt="covid 1"
      />
      <img src={covid2} className="absolute right-80 top-1/2" alt="covid 2" />
      <div className="inset-0 absolute z-10">
        <div className="container px-0 md:px-20 mx-auto h-full">
          <div className="flex flex-col justify-between py-10 px-5 md:px-0 h-full">
            <h2 className="text-white text-3xl mb-5 md:mb-0">
              Covid 19: Reimagining What’s Next
            </h2>
            <p className="text-white mb-5 md:mb-0">
              As the world grapples with COVID-19, it is imperative to <br />{" "}
              consider what a post-COVID digital strategy means for us <br />{" "}
              today in the industry
            </p>
            <div>
              <Button label="How we can help"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidInfo;
