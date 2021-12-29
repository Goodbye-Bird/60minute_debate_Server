import express from "express";

import devate from "./devate.ctrl/devate";
import notificate from "./devate.ctrl/notificate";

const router = express.Router();

router.post("/:id", devate);
router.get("/notificate", notificate);

export default router;
