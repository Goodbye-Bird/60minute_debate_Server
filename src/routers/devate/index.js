import express from "express";
import postdevate from "./devate.ctrl/postdevate.js";

import notificate from "./devate.ctrl/notificate.js";
import timeCheck from "./devate.ctrl/TimeCheck.js";

const router = express.Router();

router.get("/notificate", notificate);
router.get("/timeCheck/:time", timeCheck);
router.post("/postdebate", postdevate);

export default router;
