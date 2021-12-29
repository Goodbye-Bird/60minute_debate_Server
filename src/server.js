import "dotenv/config";
import express from "express";
import routers from "./routers";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);

app.use("/static", express.static("router"));
app.use("/", routers);

export default app;
