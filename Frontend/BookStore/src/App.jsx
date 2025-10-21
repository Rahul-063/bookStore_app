import React, { useState } from "react";
import Home from "./home/Home.jsx";
import { Route,Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx"
import Signup from "./components/Signup.jsx";
import {Toaster} from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log()
  return (
     <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser? <Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Toaster />
     </div>
      
  )   
}

export default App;
