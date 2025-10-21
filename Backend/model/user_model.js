import db from "../text.js";

export const createuser=async(fullname,email,password)=>{
    const result=await db.query(
        "INSERT INTO users(fullname,email,password) VALUES ($1,$2,$3) RETURNING *",
        [fullname,email,password]
    );
    return result.rows[0];
};

export const getAllEmail=async(email)=>{
    const result=await db.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    );
    return result.rows[0];
};

export const getAllusers=async()=>{
    const result=await db.query(
        "SELECT * FROM users ORDER BY id ASC"
    );
    return result.rows[0];
};