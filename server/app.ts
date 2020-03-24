import express from "express";
import { PORT } from "./config";
import { userRouter } from "./routers";
import "./db";

const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, (): void => {
    console.log(`Server up ${ PORT }`)
});