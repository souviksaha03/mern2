import express from "express";
import { signup, signin } from "../Controller/Userctl.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Signin
router.post("/signin", signin);

export default router;
