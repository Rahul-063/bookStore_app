import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleClick = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("users");
      toast.success("Logout successful");
     
      setTimeout(() => {
        window.location.reload();
      }, 2000);
     
    } catch (err) {
      toast.error("Error:" + err);
      setTimeout(()=>{},2000);
    }
  };
  return (
    <div>
      <button
        className="className=px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
