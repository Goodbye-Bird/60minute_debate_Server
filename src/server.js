import "dotenv/config";
import express from "express";
import routers from "./routers";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/static", express.static("public"));
app.use("/", routers);

export default app;
