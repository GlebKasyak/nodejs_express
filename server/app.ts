import express from "express";
import { PORT } from "./config";
import cookieParser from "cookie-parser";
import { userRouter } from "./routers";
import "./db";

const app: express.Application = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", userRouter);

app.listen(PORT, (): void => {
    console.log(`Server up ${ PORT }`)
});