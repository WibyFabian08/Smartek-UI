import React from "react";
import ContentTitle from "../../elements/ContentTitle";
import clients from "../../json/clients";

const Client = () => {
  return (
    <section className="container mx-auto px-5 md:px-20 mt-16 md:mt-32">
      <ContentTitle
        title="OUR CLIENT"
        subTitle="Trusted by Leading Business"
      ></ContentTitle>
      <div className="flex flex-wrap justify-center items-center mt-5  md:px-20">
        {clients &&
          clients?.map((client, index) => {
            return (
              <div
                key={index + client?.id}
                className="w-4/12 md:w-1/6 mx-2 mb-7 flex justify-center"
              >
                <img src={client?.image} alt={`client ${client?.id}`} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Client;
