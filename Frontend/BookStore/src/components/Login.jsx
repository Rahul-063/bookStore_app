import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast"

function Login() {
  const{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  const onSubmit =async (data) => {
    const userinfo={
        email:data.email,
        password:data.password
      }
      try{
          const res=await axios.post("http://localhost:3000/user/login",userinfo);
          console.log(res)
          if(res.data){
            toast.success("login successful")
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("users",JSON.stringify(res.data))
            },1000);
          }
          
      }catch(err){
          console.log(err);
          toast.error("Error:"+err.response.data.message)
          setTimeout(()=>{},2000);
      }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link 
              to="/" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
         
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span><br/>
              <input type="email" placeholder="Enter the email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email",{required:true})}/><br/>
              {errors.email &&(<span className="text-sm text-red-500">This filed is required</span>)}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span><br/>
              <input type="text" placeholder="Enter the password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password",{required:true})}/><br/>
              {errors.password &&(<span className="text-sm text-red-500">This filed is required</span>)}

            </div>
            <div className="flex mt-4 justify-around">
              <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
              <p>Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
