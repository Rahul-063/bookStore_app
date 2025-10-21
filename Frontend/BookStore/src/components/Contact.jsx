import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

function Contact() {
    const{
            register,
            handleSubmit,
            formState:{errors},
        }=useForm();
  return (
    <div className="flex h-screen justify-center items-center">
      <div  className="w-[500px] border-[2px] shadow-md p-5 rounded-md">
        <div className="model-box relative  ">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
                </Link>
          
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                type="text"
                placeholder="Enter the name"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("fullname",{required:true})}/><br />
                {errors.fullname &&(<span className="text-sm text-red-500">This filed is required</span>)}
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                type="email"
                placeholder="Enter the email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email",{required:true})}/><br/>
                {errors.email &&(<span className="text-sm text-red-500">This filed is required</span>)}
            </div>

            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                type="text"
                placeholder="Enter the password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password",{required:true})}/><br/>
                {errors.password &&(<span className="text-sm text-red-500">This filed is required</span>)}
            </div>
            <div className="flex mt-4 justify-around">
                <button className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                Submit
                </button>
               
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}
export default Contact;