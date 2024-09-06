import express from "express";
import { userValidationRules } from "../validator/userValidator";
import validate from "../middlewares/validate";
import { createUser, loginUser, logoutUser, verifyUser } from "./authController";



const authRouter = express.Router();

// Authentication Routes
authRouter.post("/signup",userValidationRules(),validate, createUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/verify", verifyUser);


export default authRouter;