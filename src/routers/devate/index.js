import express from "express";

import notificate from "./devate.ctrl/notificate";

const router = express.Router();

router.get("/notificate", notificate);

export default router;
