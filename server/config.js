const dotenv = require("dotenv");
const path = require("path");

const root = path.join(__dirname, ".env");
dotenv.config({ path: root });

module.exports = {
  PORT: process.env.PORT || 4444
};