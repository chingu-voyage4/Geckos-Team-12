const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  //seedDB = require("./utils/seed").seedDB,
  crop = require("./routes/crops"),
  task = require("./routes/tasks"),
  badge = require("./routes/badges"),
  user = require("./routes/users"),
  auth = require("./routes/auth"),
  passport = require("passport");

if (process.env.NODE_ENV !== "production") {
  // Development environment
  require("dotenv").config();
  if (!process.env.DEBUG) {
    process.env.DEBUG = "server";
  }
}
if (process.env.DEBUG === "server") {
  const morgan = require("morgan");
  app.use(morgan("tiny"));
}

//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB =
  process.env.MONGODB_URI ||
  "mongodb://any:team@ds259268.mlab.com:59268/farm-app";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// CORS middleware
var cors = require("cors");

const passportService = require("./utils/passport"),
  requireAuth = passport.authenticate("jwt", { session: false });
app.use(cors());

// Body parser configuration
app.use(bodyParser.json({ type: "*/*" }));
app.get("/ping", (req, res) => res.send("pong"));

app.use("/auth", auth);
app.use("/crops", crop);
app.use("/tasks", requireAuth, task);
app.use("/badges", requireAuth, badge);
app.use("/users", requireAuth, user);

//DB seedlings
//seedDB();
//Server Setup
const port = process.env.PORT || 5000;

app.listen(port);

console.log("Server listening on Port", port);

module.exports.app = app;
