import React from "react";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="card p-5 mx-4 mt-10 w-full md:w-3/12" style={{height: 165}}>
      <div className="flex items-center">
        <img src={icon} alt="award" />
        <p className="font-bold ml-3">{title}</p>
      </div>
      <p className="text-sm ml-9 mt-3 text-gray-400">{desc}</p>
    </div>
  );
};

export default Card;
