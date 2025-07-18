import React from "react";
import bookimage from "../Assets/book.png";

const Banner = () => {
  return (
    <>
      <div className="mt-15">
        <div className="max-w-screen-2xl container max-auto px-5 md:px-20 flex flex-col md:flex-row">
          <div className="w-full order-2 md:order-1 md:w-1/2">
            <div className="space-y-12 mt-12 md:mt-20">
              <h1 className="text-3xl font-bold">
                Hello, Welcome here to learn something
                <span className="text-fuchsia-500 font-bold">
                  {" "}
                  new everyday!
                </span>
              </h1>
              <p className="mt-5 word">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                veritatis exercitationem totam minima labore eum tempore,
                consequatur odio. Sequi modi dolore, reprehenderit doloribus
                aperiam voluptatem maxime vel ab numquam illum!
              </p>
            </div>
            <label className="input validator mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <input
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            <div className=" mt-5">
              <button className="btn join-item  bg-secondary text-white ">
               Sign Up
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 order-1 md:order-2">
            <img src={bookimage} className="w-full h-auto" alt="book png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
