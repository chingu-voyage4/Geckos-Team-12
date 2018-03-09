const express = require("express");
const bodyParser = require("body-parser");

const app = express();

if (process.env.NODE_ENV !== "production") {
  // Development environment -->
  require("dotenv").config();
  if (!process.env.DEBUG) process.env.DEBUG = "server";
} // <-- Development environment
if (process.env.DEBUG === "server") {
  const morgan = require("morgan");
  app.use(morgan("tiny"));
}

// CORS middleware
var cors = require("cors");
app.use(cors());
// Body parser configuration
app.use(bodyParser.json({ type: "*/*" }));

app.get("/ping", (req, res) => res.send("pong"));
//Server Setup
const port = process.env.PORT;

app.listen(port);
console.log("Server listening on Port", port);
