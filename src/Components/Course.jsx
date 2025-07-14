import React from "react";
import Cards from "./Cards";
import List from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto px-5 md:px-20 flex flex-col md:flex-colomn">
        <h1 className="font-semibold mt-25 text-2xl text-center">
          We're delighted to have you
          <span className="text-pink-500"> Here!</span>
        </h1>
        <p className="text-center mt-5 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore neque
          dolor sint vitae animi nesciunt, magnam fugit voluptatibus debitis
          suscipit tempora provident ipsam quibusdam deserunt! Minus dolores
          iusto sit possimus!
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-secondary w-20 text-center mt-6 ">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 justify-center align-center gap-5 px-5 md:px-20">
        {List.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
