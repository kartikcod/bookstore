import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen ">
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs p-4 border-3 shadow-xl">
          <legend className="fieldset-legend text-xl text-center">Contact Us</legend>

          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" 
          />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" 
           {...register("email", { required: true })}
          />
           {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

          <label className="label">Password</label>
          <textarea type="message" className="input" placeholder="Message" 
           {...register("message", { required: true })}
          />
           {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

          <button type="submit" className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
