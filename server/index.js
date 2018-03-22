const express = require("express");
const bodyParser = require("body-parser");

const app = express();

if (process.env.NODE_ENV !== "production") {
    // Development environment -->
    require("dotenv").config();
    if (!process.env.DEBUG) {
        process.env.DEBUG = "server";
    }
} // <-- Development environment
if (process.env.DEBUG === "server") {
    const morgan = require("morgan");

    app.use(morgan("tiny"));
}

<<<<<<< HEAD
//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://any:team@ds259268.mlab.com:59268/farm-app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// CORS middleware
var cors = require("cors");
=======
// Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://any:team@ds259268.mlab.com:59268/farm-app";

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// CORS middleware
let cors = require("cors");
>>>>>>> d0ecce6769e1005cbd00f7ed1f3d43672d6d5ab3

app.use(cors());

// Body parser configuration
app.use(bodyParser.json({ type: "*/*" }));

app.get("/ping", (req, res) => res.send("pong"));

<<<<<<< HEAD

//Server Setup
const port = process.env.PORT || 3001;

app.listen(port);
console.log("Server listening on Port", port);
=======
// Server Setup
const port = process.env.PORT || 3001;

app.listen(port);
console.log("Server listening on Port", port);

module.exports.app = app;
>>>>>>> d0ecce6769e1005cbd00f7ed1f3d43672d6d5ab3
