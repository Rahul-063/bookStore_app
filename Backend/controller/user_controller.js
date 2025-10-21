import {createuser,getAllEmail} from "../model/user_model.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        const existingUser=await getAllEmail(email);
        if(existingUser){
           return res.status(400).json({message:"user already present"});
        }
        const hashedpassword=await bcryptjs.hash(password,10);
        const newUser=await createuser(
            fullname,
            email,
            hashedpassword
        );
        
        res.status(200).json({message:"user created successfully",
            user:{
                id:newUser.id,
                fullname:newUser.fullname,
                email:newUser.email
            }
        });
    }catch(error){
        console.error("Error during signup:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const existingUser=await getAllEmail(email);
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch=await bcryptjs.compare(password,existingUser.password);
        if(!isMatch){
            return res.status(400).json({message:"inavlid email and password"});
        }else{
            res.status(200).json({message:"Login successful",existingUser:{
                id:existingUser.id,
                fullname:existingUser.fullname,
                email:existingUser.email
            }});
        }
    }catch(err){
        console.log("error:" +err.message)
        res.status(500).json({message:"Internal server error"})
    }
}

