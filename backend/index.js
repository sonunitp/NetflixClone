import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";  
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.route.js";
import cors from "cors";
databaseConnection();
dotenv.config({
    path:"./.env"
})
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',

}
app.use(cors(corsOptions));
//api
app.use("/api/v1/user",userRouter);
app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});