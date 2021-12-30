import express from "express";
import getauth from "./getauth";

const router = express.Router();

router.get("/", getauth);

export default router;
