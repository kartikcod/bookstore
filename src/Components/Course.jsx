import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
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
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container max-auto px-5 dark:bg-black dark:text-white  md:px-20 flex flex-col md:flex-colomn">
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
            <button className="btn btn-secondary w-20 text-center mt-6 hover:bg-pink-700 ">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 justify-center align-center gap-5 px-5 md:px-20">
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
          book.map((item, index) => (
            <Cards key={item.id ?? index} item={item} />
          ))
        )}
      </div>
    </>
  );
};

export default Course;
