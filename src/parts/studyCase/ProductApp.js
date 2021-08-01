import React from "react";

import travo from "../../assets/images/travo.png";
import carbon from "../../assets/images/carbon.png";
import Button from "../../elements/Button";

const ProductApp = ({ genap, data }) => {
  if (genap) {
    return (
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 bg-gray-50">
          <div className="h-full flex flex-col p-10 justify-center">
            <div className="">
              <Button badge label={data.type}></Button>
            </div>
            <h2 className="text-3xl mt-5 mb-5">{data.name}</h2>
            <p className="text-gray-400 text-sm">{data.desc}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={data.image} className="object-cover h-3/4" alt="travo" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap">
      <div
        className="w-full md:w-1/2 flex justify-center items-center"
        style={{ backgroundColor: "#EFEFEF" }}
      >
        <img src={data.image} className="object-cover h-3/4" alt="travo" />
      </div>
      <div className="w-full md:w-1/2">
        <div className="h-full flex flex-col p-10 justify-center">
          <div className="">
            <Button badge label={data.type}></Button>
          </div>
          <h2 className="text-3xl mt-5 mb-5">{data.name}</h2>
          <p className="text-gray-400 text-sm">{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductApp;
