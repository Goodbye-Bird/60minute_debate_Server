import express from "express";
import auth from "./auth";
import devate from "./devate";

const router = express.Router();

router.use("/auth", auth);
router.use("/debate", devate);

export default router;
