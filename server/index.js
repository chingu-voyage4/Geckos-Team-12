const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const crop = require('./routes/cropRouter');

if (process.env.NODE_ENV !== "production") {
  // Development environment -->
  require("dotenv").config();
  if (!process.env.DEBUG) process.env.DEBUG = "server";
} // <-- Development environment
if (process.env.DEBUG === "server") {
  const morgan = require("morgan");
  app.use(morgan("tiny"));
}

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://any:team@ds259268.mlab.com:59268/farm-app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// CORS middleware
var cors = require("cors");

app.use(cors());

// Body parser configuration
app.use(bodyParser.json({ type: "*/*" }));

app.get("/ping", (req, res) => res.send("pong"));

app.route("/cropRouter")
    .get(crop.getCrops)
    .post(crop.postCrop);
app.route("/cropRouter/:id")
    .get(crop.getCrop)
    .delete(crop.deleteCrop)
    .put(crop.updateCrop);


//Server Setup
const port = process.env.PORT || 5000;

app.listen(port);
console.log("Server listening on Port", port);

module.exports = app; // for testing