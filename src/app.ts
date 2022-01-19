require("dotenv").config();
import express from "express";
import config from "config";
import cors from "cors";
import { connectToDb, log } from "./utils";
import { deserializeUser } from "./middleware";
import router from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(deserializeUser);
app.use(router);

const port = config.get("port");

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);
  connectToDb();
});
