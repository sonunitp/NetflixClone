import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from '../routers/user.route.js';
dotenv.config({
    path: "./.env"
})
const databaseConnection = () => {
    mongoose.connect(`${process.env.MONGO_URI}/netflix`).then(() => {
        console.log(" mongodb connected successfully");
    }).catch((error) => {
        console.log(error);
    })
};
export default databaseConnection;