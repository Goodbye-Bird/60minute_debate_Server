import express from "express";
import auth from "./auth/index.js";
import devate from "./devate/index.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/debate", devate);

export default router;
