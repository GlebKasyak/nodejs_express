const express = require("express");
const { PORT } = require("./config");
const app = express();

app.use(express.json());
app.use("/api", require("./routers/users"));

app.listen(PORT, () => {
    console.log(`Server up ${ PORT }`)
});