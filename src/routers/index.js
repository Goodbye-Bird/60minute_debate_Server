import express from "express";
import auth from "./auth/index.js";
import devate from "./devate/index.js";
import main from "./main/index";

const router = express.Router();

router.use("/auth", auth);
router.use("/debate", devate);
router.use("/main", main);

export default router;
