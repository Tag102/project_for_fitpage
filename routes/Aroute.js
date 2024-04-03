import express from "express";
import {
    registerController,
    loginController,

} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || uses post
router.post("/register", registerController);

//for login || POST
router.post("/login", loginController);


export default router;
