import React from "react";

const ContentTitle = ({title, subTitle}) => {
  return (
    <div className="px-5 md:px-0 mb-10">
      <p className="text-center mb-5 font-bold" style={{ color: "#1A237E" }}>
        {title}
      </p>
      <h2 className="text-center text-2xl font-semibold">
        {subTitle}
      </h2>
    </div>
  );
};

export default ContentTitle;
