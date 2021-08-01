import React from "react";
import logo from "../assets/icons/logo.svg";
import FooterLink from "../elements/FooterLink";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#020308" }}>
      <div className="container mx-auto px-5 md:px-20 py-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <div className="flex items-center">
              <img src={logo} width={30} alt="logo smartek" />
              <p className="text-white font-bold ml-3">
                PT Smartek Sistem Kreasi Alpha
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <p className="text-white font-bold">Head Office</p>
              <p className="text-gray-400 mt-3 text-sm">
                Gedung BITC Lantai 2 <br />
                jl. HMS Mintaredja Sarjana Hukum No. 1, Baros <br />
                Cimahi Tengah, Cimahi, Jawa Barat 40521, Indonesia <br />
                (+6222) 3050 8850 <br />
                (+62) 812 1100 8850
              </p>
              <p className="text-white font-bold mt-5">Brach Office</p>
              <p className="text-gray-400 mt-3 text-sm">
                WISMA ASTRI <br />
                jl. Cendana No. 11, Gandul, Cinere <br />
                Depok, Jawa Barat 165514, Indonesia <br />
                (+6221) 3970 8850
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/6 mb-10 md:mb-0">
            <h1 className="text-white">
              <p className="text-white font-bold mb-3 ">Company</p>
            </h1>
            <div className="flex flex-col">
              <FooterLink path="/" label="Home"></FooterLink>
              <FooterLink path="/" label="About Us"></FooterLink>
              <FooterLink path="/" label="Case Study"></FooterLink>
              <FooterLink path="/" label="Contact"></FooterLink>
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-10 md:mb-0">
            <h1 className="text-white">
              <p className="text-white font-bold mb-3">Services</p>
            </h1>
            <div className="flex flex-col">
              <FooterLink
                path="/"
                label="Enterprise & Custom Software Development"
              ></FooterLink>
              <FooterLink
                path="/"
                label="Mobile Application Development"
              ></FooterLink>
              <FooterLink path="/" label="System Integration"></FooterLink>
              <FooterLink path="/" label="Big Data Services"></FooterLink>
              <FooterLink
                path="/"
                label="Digital Marketing Agency"
              ></FooterLink>
            </div>
          </div>
          <div className="w-full md:w-1/5 ml-0 md:ml-7">
            <h1 className="text-white">
              <p className="text-white font-bold mb-3">Expertise</p>
            </h1>
            <div className="flex flex-col">
              <FooterLink
                path="/"
                label="Desktop & Android App Development"
              ></FooterLink>
              <FooterLink
                path="/"
                label="ERP Customization Solution"
              ></FooterLink>
              <FooterLink
                path="/"
                label="E-Commerce Website Development"
              ></FooterLink>
              <FooterLink
                path="/"
                label="Wordpress Web Development"
              ></FooterLink>
              <FooterLink
                path="/"
                label="Landing Page Optimization"
              ></FooterLink>
              <FooterLink path="/" label="Facebook Advertisting"></FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
