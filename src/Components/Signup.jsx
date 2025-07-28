import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center p-80 md:p-10 h-screen bg-gray-100 ">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-96 border p-6 bg-white text-black rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-start text-lg">SignUp</h3>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-sm btn-circle border border-gray-400 btn-ghost"
                >
                  ✕
                </button>
              </Link>
            </div>

            <label htmlFor="">Name</label>
            <input
              className="p-2 border border-gray-400   rounded-sm"
              type="text"
              placeholder="Kartik"
              {...register("name", { required: true })}
            />

            <label htmlFor="">Email</label>
            <input
              className="p-2 border border-gray-400   rounded-sm"
              type="email"
              placeholder="abc@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-[13px] text-red-500">
                This field is required
              </span>
            )}
            <label htmlFor="">Password</label>
            <input
              className="p-2 border border-gray-400  rounded-sm"
              type="number"
              placeholder="Kartik@0021"
              {...register("number", { required: true })}
            />
            {errors.email && (
              <p className="text-[13px] text-red-500">
                This field is required
              </p>
            )}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="btn btn-secondary hover:bg-pink-700"
              >
                Signup
              </button>
              <span className="text-sm">
                Have Account?
                <button
                  type="button"
                  className="cursor-pointer text-blue-400 underline"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </button>
                <Login />
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
