import React from "react";

import dot from "../../assets/icons/dotdarkblue.svg";
import Button from "../../elements/Button";
import InputText from "../../elements/InputText";

const Discussion = () => {
  return (
    <section style={{ backgroundColor: "#C3C5CC", height: 560 }}>
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap">
          <div className="w-0 md:w-8/12 text-left invisible md:visible">
            <h2 className="md:text-6xl mb-5" style={{ color: "#2A3443" }}>
              Have a project <br />
              in mind?
            </h2>
            <h2
              className="text-4xl mb-5 font-semibold"
              style={{ color: "#1A237E" }}
            >
              Let’s start a discussion!
            </h2>
            <img src={dot} alt="dot icon" />
          </div>
          <div className="w-full md:w-4/12 text-left">
            <h2
              className="text-xl block md:hidden mb-5"
              style={{ color: "#1A237E" }}
            >
              Let’s start a discussion!
            </h2>
            <form
              onSubmit={() => alert("submit")}
              className="flex flex-wrap justify-between w-full"
            >
              <div className="w-full flex flex-wrap justify-between">
                <InputText placeholder="Name" name="name" small></InputText>
                <InputText
                  placeholder="Company Name"
                  name="company"
                  small
                ></InputText>
              </div>
              <InputText placeholder="Email Address" name="email"></InputText>
              <InputText placeholder="Project" name="project"></InputText>
              <InputText placeholder="Message" textArea></InputText>
              <div className="flex ml-auto mt-5 px-2">
                <Button label="Sumbit" submit></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussion;
