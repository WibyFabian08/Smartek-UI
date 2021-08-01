import React from "react";
import box from "../../assets/images/box-service.svg";
import ContentTitle from "../../elements/ContentTitle";
import services from "../../json/services";

const Services = () => {
  return (
    <section className="container px:0 md:px-20 mx-auto py-10 relative">
      <ContentTitle
        title="OUR SERVICE"
        subTitle="You put the best choice to trust us"
      ></ContentTitle>
      <img
        src={box}
        className="absolute bottom-16 -right-10 invisible md:visible"
        alt=""
      />
      <div className="flex flex-wrap justify-center items-center mt-5">
        {services &&
          services?.map((service, index) => {
            return (
              <div
                style={{ width: 315, height: 380 }}
                className="w-1/4 mx-4 mb-7 relative"
                key={index + service.id}
              >
                <p className="absolute top-5 left-7 text-white w-4/6">
                  {service?.desc}
                </p>
                <img
                  src={service?.image}
                  className="object-cover rounded-xl"
                  alt="service 1"
                  width={315}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Services;
