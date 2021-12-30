import express from "express";
import join from "./authctrl/join.js";
import login from "./authctrl/login.js";
import mailDupCheck from "./authctrl/mailDupCheck.js";
import getauth from "../main/getauth.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/main", verifyToken, getauth);

router.post("/join", join);
router.post("/join/mailCheck", mailDupCheck);

export default router;
