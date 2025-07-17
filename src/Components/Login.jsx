import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleClose = () => {
    document.getElementById("my_modal_3").close();
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="">Email</label>
              <input
                className="p-2 border border-gray-400 bg-slate-100 rounded-sm"
                type="email"
                placeholder="abc@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <label htmlFor="">Password</label>
              <input
                className="p-2 border border-gray-400 bg-slate-100 rounded-sm"
                type="password"
                placeholder="Kartik@0021"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="btn btn-secondary hover:bg-pink-700"
                >
                  Login
                </button>
                <button className="text-sm">
                  Not Registerd?
                  <Link to="/signup" className="text-blue-400 underline ">
                    Signup
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
