import React from "react";
import ContentTitle from "../../elements/ContentTitle";
import tools from "../../json/tools";

const Tools = () => {
  console.log(tools);
  return (
    <section
      className="flex flex-col justify-center md:px-40 mt-16 md:mt-32"
      style={{ backgroundColor: "#EFEFEF", height: 670 }}
    >
      <ContentTitle
        title="TECH EXPERTISE"
        subTitle="Technology we used on a daily basis"
      ></ContentTitle>
      <div className="flex flex-wrap-reverse justify-center items-center mt-0 md:mt-5 px-0 md:px-32">
        {tools &&
          tools?.map((tool, index) => {
            return (
              <div
                key={index + tool.id}
                className="mx-4 md:mx-6 mb-7 p-4 flex justify-center bg-white rounded-full overflow-hidden"
              >
                <img src={tool?.image} width={50} alt={tool.id} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Tools;
