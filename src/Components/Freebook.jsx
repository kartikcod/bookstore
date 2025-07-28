import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

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
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log(error);
        setError("Books Not Found !");
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, []);

  const filtterFreeData = book.filter((item) => {
    return item.category === "free";
  });
  return (
    <>
      <div className="max-w-screen-2xl container max-auto px-5 md:px-20 flex flex-col md:flex-column mt-10 dark:bg-black dark:text-white border-white ">
        <h1 className="font-bold">Free offered Coures</h1>
        <p className="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          totam deserunt sequi. Asperiores amet eius laboriosam facere quisquam
          possimus ipsa.
        </p>
      </div>
      <div className="max-w-screen-xl container max-auto px-5 md:px-20 mt-10">
        <div className="slider-container">
          {loading ? (
            <div className="col-span-3 flex justify-center items-center h-64">
              <span className="loading loading-spinner text-error"></span>
            </div>
          ) : error ? (
            <div className="col-span-3 text-center text-pink-500">{error}</div>
          ) : book.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">
              No books found.
            </div>
          ) : (
            <Slider {...settings}>
              {filtterFreeData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Freebook;
