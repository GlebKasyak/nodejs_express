import dotenv from "dotenv";
import path from "path";

const root: string = path.join(__dirname, ".env");
dotenv.config({ path: root });

export const PORT = process.env.PORT || 4444;
export const DB_URL = process.env.DB_URL;
