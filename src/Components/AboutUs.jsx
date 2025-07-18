import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "../assets/bg-book.jpg";

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
const AboutUs = () => {
  return (
    <div className="mt-30 text-center container mx-auto">
      <h1 className="text-4xl font-bold text-center ">About Us</h1>
      <p className="p-4 text-gray-400 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ut amet
        recusandae sapiente perspiciatis pariatur veritatis quibusdam. Quisquam
        provident amet dolor laudantium impedit doloribus quas eius id,
        obcaecati quos ipsa assumenda deserunt a autem odit natus? Rerum
        veritatis numquam, autem optio harum nihil nostrum neque sit dolorum ea!
        Assumenda, tempora!
      </p>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 mt-10">
        <Slider {...settings}>
          <div className="p-2">
            <img
              src={Image}
              alt="banner"
              className="w-full h-auto gap-2 "
            />
          </div>
          <div className="p-2">
            <img
              src={Image}
              alt="banner"
              className="w-full h-auto gap-2 "
            />
          </div>
          <div className="p-2">
            <img
              src={Image}
              alt="banner"
              className="w-full h-auto gap-2 "
            />
          </div>
          <div className="p-2">
            <img
              src={Image}
              alt="banner"
              className="w-full h-auto gap-2 "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
