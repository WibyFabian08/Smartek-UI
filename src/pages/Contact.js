import React from "react";
import Button from "../elements/Button";
import ContentTitle from "../elements/ContentTitle";
import InputText from "../elements/InputText";
import Navbar from "../elements/Navbar";
import Footer from "../parts/Footer";

import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import jam from "../assets/icons/jam.svg";
import map from "../assets/images/map.png";

const Contact = () => {
  return (
    <section className="overflow-y-hidden">
      <Navbar blue></Navbar>
      <div className="py-10">
        <ContentTitle
          title="CONTACT"
          subTitle="Have a project in mind?"
        ></ContentTitle>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 bg-gray-100">
          <div className="p-5 md:p-20">
            <p className="ml-4 text-xl mb-5" style={{ color: "#1A237E" }}>
              Contact info
            </p>
            <form
              onSubmit={() => alert("submit")}
              className="flex flex-wrap justify-between w-full"
            >
              <div className="w-full md:flex justify-between px-2">
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
              <div className="w-full p-0 md:p-4">
                <InputText placeholder="Email Address" name="email"></InputText>
                <InputText placeholder="Project" name="project"></InputText>
                <InputText placeholder="Message" textArea></InputText>
              </div>
              <div className="flex ml-0 md:ml-4 mt-5 md-p2">
                <Button label="Sumbit" submit></Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2" style={{ backgroundColor: "#525358" }}>
          <div className="p-5 md:p-20">
            <p className="text-white text-xl mb-5">Contact info</p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 flex items-center mb-5">
                <img src={mail} alt="mail" />
                <p className="text-white text-sm ml-2">
                  hello@smarteksistem.com
                </p>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-5">
                <img src={jam} alt="mail" />
                <p className="text-white text-sm ml-2">
                  Senin - Jum'at : 10:00 - 17.00 WIB <br />
                  Sabtu : 10:00 - 14.30 WIB{" "}
                </p>
              </div>
              <div className="w-full md:w-1/2 flex items-center mb-5">
                <img src={phone} alt="mail" />
                <p className="text-white text-sm ml-2">(+6222) 3050 8850</p>
              </div>
            </div>
            <img src={map} className="w-full" alt="fake map" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Contact;
