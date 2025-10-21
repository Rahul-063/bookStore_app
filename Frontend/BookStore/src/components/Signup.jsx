import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"

function Signup() {
    const location=useLocation();
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || "/";
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();

    const onSubmit = async(data) => {
        const userinfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        try{
            const res=await axios.post("http://localhost:3000/user/signup",userinfo);
            console.log(res)
            if(res.data){
                toast.success("signup successful")
                navigate(from,{replace:true});
            }
            localStorage.setItem("users",JSON.stringify(res.data))
        }catch(err){
            console.log(err);
            toast.error("Error:"+err.response.data.message)
        }
    }
  return (
    <div className="flex h-screen justify-center items-center">
      <div  className="w-[500px] border-[2px] shadow-md p-5 rounded-md">
        <div className="model-box relative  ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
                </Link>
          
            <h3 className="font-bold text-lg">Signup</h3>
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
                <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
                </button>
                <p>
                Have Account{" "}
                <button className="underline text-blue-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}>
                    Login
                </button>
                <Login/>
                </p>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
