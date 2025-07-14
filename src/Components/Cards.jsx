import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="card bg-base-100 w-80 p-3 shadow-xl hover:scale-105 transition-all ease-in-out duration-200">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between mt-5">
            <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-200 transition-all ease-in-out">
              ${item.price}
            </div>
            <div className=" hover:bg-pink-500 hover:text-white duration-200 transition-all ease-in-out cursor-pointer px-2 py-1 border rounded-full">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
