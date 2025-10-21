import {Client} from "pg";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const db=new Client({
    user:process.env.PG_USER,
    host:process.env.PG_HOST,
    database:process.env.PG_DATABASE,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT,
})
db.connect()
   .then(()=> console.log("✅ PostgreSQL connected successfully"))
   .catch((err) => console.error("❌ PostgreSQL connection error", err));


export default db;