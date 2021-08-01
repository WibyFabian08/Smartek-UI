import React, { useEffect } from "react";
import Button from "../elements/Button";
import ContentTitle from "../elements/ContentTitle";
import InputFile from "../elements/InputFile";
import InputText from "../elements/InputText";
import Navbar from "../elements/Navbar";
import RadioInput from "../elements/RadioInput";
import Footer from "../parts/Footer";

const Career = () => {
  useEffect(() => {
    document.title ='Career'
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="overflow-hidden">
      <Navbar blue></Navbar>
      <div className="container px-5 md:px-64 py-20">
        <ContentTitle
          title="CAREER"
          subTitle="Big goals cannot be achieved alone, it must be done together and consistently, therefore we are looking for talented young talents who really love what they do"
        ></ContentTitle>

        <div className="mt-20">
          <p className="text-gray-700 text-lg">
            <span className="text-red-900 text-lg">* </span>
            Fill out the form below, and we’ll get back to you if we’d like to
            learn more. Please note we are not able to personally reply to every
            applicant.
          </p>
          <h2 className="text-2xl font-bold mt-5">1. Tell us who you are</h2>
          <form
            onSubmit={() => alert("submit")}
            className="flex flex-wrap justify-between w-full mt-10"
          >
            <InputText placeholder="Full Name" name="name" dark></InputText>
            <div className="w-full flex flex-wrap justify-between">
              <InputText
                placeholder="Email"
                name="email"
                small
                dark
              ></InputText>
              <InputText
                placeholder="URL (Portofolio, Linkedin, etc)"
                name="link"
                small
                dark
              ></InputText>
            </div>
            <InputText placeholder="Phone" name="phone" dark></InputText>
            <InputFile placeholder="Attach Resume (pdf, zip 3MB max)"></InputFile>
            <div className="flex flex-wrap justify-between w-full mt-10 mb-10">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <p className="text-lg text-gray-700 font-semibold mb-3">
                  Your expertise in software house division
                </p>
                <RadioInput
                  name="Android Developer"
                  value="android developer"
                ></RadioInput>
                <RadioInput
                  name="IOS Developer"
                  value="ios developer"
                ></RadioInput>
                <RadioInput
                  name="Backend Developer"
                  value="backend developer"
                ></RadioInput>
                <RadioInput
                  name="Frontend Developer"
                  value="frontend developer"
                ></RadioInput>
                <RadioInput
                  name="Database Administrator"
                  value="database administrator"
                ></RadioInput>
                <RadioInput
                  name="UI/UX Designer"
                  value="ux/ux designer"
                ></RadioInput>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <p className="text-lg text-gray-700 font-semibold mb-3">
                  Your expertise in digital marketing and sales
                </p>
                <RadioInput
                  name="Social Media Expertist"
                  value="social media expertist"
                ></RadioInput>
                <RadioInput
                  name="SEO Specialist"
                  value="seo specialist"
                ></RadioInput>
                <RadioInput name="Copy Writer" value="copy writer"></RadioInput>
                <RadioInput
                  name="Video Grapher"
                  value="video grapher"
                ></RadioInput>
                <RadioInput name="Sales" value="sales"></RadioInput>
              </div>
            </div>
            <InputText
              placeholder="Tell us why you want to work for Smartek Sistem"
              textArea
              dark
            ></InputText>
            <div className="flex ml-auto px-2 mt-5">
              <Button label="Sumbit" submit></Button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Career;
