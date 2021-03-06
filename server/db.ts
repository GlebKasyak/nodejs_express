import { connect, connection, connections } from "mongoose";
const { DB_URL } = require("./config");

const db = connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

connection.on("open", (): void => {
    const info = connections[0];
    console.log(`Connected to:
     host: ${info.host},
     port: ${info.port},
     name: ${info.name}
    `)
});

export default db;