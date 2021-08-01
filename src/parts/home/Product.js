import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ContentTitle from "../../elements/ContentTitle";

import products from "../../json/products";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Product = () => {
  return (
    <section className="mt-10">
      <ContentTitle title="OUR PRODUCT"></ContentTitle>
      <div className="mb-20">
        <Carousel responsive={responsive}>
          {
            products && products?.map((product, index) => {
              return (
                <div key={index} className="m-2">
                  <img src={product?.image} alt="" />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </section>
  );
};

export default Product;
