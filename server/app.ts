import express from "express";
import path from "path";

import { PORT } from "./config";
import cookieParser from "cookie-parser";
import { userRouter, messageRouter } from "./routers";

import "./db";

const app: express.Application = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, (): void => {
    console.log(`Server up ${ PORT }`)
});