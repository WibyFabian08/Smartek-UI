import React from "react";

import download from "../../assets/icons/download.svg";
import Button from "../../elements/Button";
import InputText from "../../elements/InputText";

const Download = () => {
  return (
    <section style={{ height: 365, backgroundColor: "#1A237E" }}>
      <div className="container mx-auto px-5 md:px-20 py-5 md:py-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={download}
              alt="download icon"
              className="mb-5 hidden md:block"
            />
            <h2 className="text-white font-bold text-xl md:text-3xl mb-5">
              Kenali Smartek lebih jauh lagi
            </h2>
            <p className="text-white text-sm mb-5">
              Download company profile kami dengan <br /> mengisi form berikut
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <form
              onSubmit={() => alert("submit")}
              className="flex flex-wrap justify-between w-full"
            >
              <div className="w-full md:flex justify-between">
                <InputText
                  placeholder="Nama Anda"
                  name="name"
                  medium
                ></InputText>
                <InputText
                  placeholder="Email Anda"
                  name="email"
                  medium
                ></InputText>
              </div>
              <div className="w-full p-0 md:p-2">
                <InputText
                  placeholder="Nama Perusahaan"
                  name="company"
                ></InputText>
              </div>
              <div className="flex ml-auto mt-5 px-2">
                <Button label="Download" download></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
