const dotenv = require("dotenv");
const path = require("path");

const root = path.join(__dirname, ".env");
dotenv.config({ path: root });

module.exports = {
  PORT: process.env.PORT || 4444,
  DB_URL: process.env.DB_URL
};