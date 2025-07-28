import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="card bg-base-100 w-80 p-2 shadow-xl border duration-200 dark:bg-black dark:text-white ">
        <figure>
          <img
            src={item.image}
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
