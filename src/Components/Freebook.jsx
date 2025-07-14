import React from "react";
import item from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "./Cards";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Freebook = () => {
  const filtterData = item.filter((item) => {
    return item.category === "free";
  });
  return (
    <>
      <div className="max-w-screen-2xl container max-auto px-5 md:px-20 flex flex-col md:flex-column mt-10">
        <h1 className="font-bold">Free offered Coures</h1>
        <p className="mt-3 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          totam deserunt sequi. Asperiores amet eius laboriosam facere quisquam
          possimus ipsa.
        </p>
      </div>
      <div className="max-w-screen-2xl container max-auto px-5 md:px-20 mt-10">
        <div className="slider-container">
          <Slider {...settings}>
            {filtterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
