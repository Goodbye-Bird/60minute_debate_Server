import express from "express";
import join from "./authctrl/join";
import login from "./authctrl/login";
import mailDupCheck from "./authctrl/mailDupCheck.js";
import nameCheck from "./authctrl/nameCheck";
import passwordCheck from "./authctrl/passwordCheck";

const router = express.Router();

router.post("/login", login);

router.post("/join", join);
router.post("/join/mailCheck", mailDupCheck);
router.post("/join/nameCheck", nameCheck);
router.post("/join/passwordCheck", passwordCheck);

export default router;
