import express from "express";
import join from "./authctrl/join.js";
import login from "./authctrl/login.js";
import mailDupCheck from "./authctrl/mailDupCheck.js";

const router = express.Router();

router.post("/login", login);

router.post("/join", join);
router.post("/join/mailCheck", mailDupCheck);

export default router;
