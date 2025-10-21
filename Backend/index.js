import express from "express";
import dotenv from "dotenv";
import bookRoute from "./routes/book_routes.js";
import userRoute from "./routes/user_routes.js"
import cors from "cors";

dotenv.config();

const app=express();
const PORT=3000;

app.use(cors());

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})