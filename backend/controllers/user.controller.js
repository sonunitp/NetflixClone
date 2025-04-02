import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(401).json({ message: "All fields are required invalid data", success: false })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({ message: "User already exists", success: false })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullName, email, password : hashedPassword });
        return res.status(201).json({ message: "User registered successfully", success: true })
    } catch (error) { 
        console.log(error);
    } 
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "All fields are required invalid data", success: false })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email/password", success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email/password", success: false });
        }
        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, "dwfervdkjfjfojroijodjf", { expiresIn: "1h" });
        return res.status(200).cookie("token", token, {
            httpOnly: true}).json({ message: "Login successfully", success: true });
        }
        catch (error) {
            console.log(error);
        }
}
export const Logout = async (req, res) => { 
    return res.status(200).cookie("token", null,{expiresIn :new Date(Date.now())}).json({ message: "Logout successfully", success: true });
}
