"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  User = require("../models/user");

// POST action to save a new user
router.post("/", (req, res) => {
  // creates a new user
  const newUser = new User(req.body);
  // save it to database
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    } else {
      // if no errors, send message below to client
      res.json({ message: "User successfully added!", user });
    }
  });
});

// PUT action by id ('/user/:id'), to update user data in database
router.post("/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { upsert: true, new: true },
    (err, user) => {
      if (err) res.send(err);
      console.log(user);
      // if no error, update and send message below to client
      res.json({ message: "User successfully updated!", user });
    }
  );
});
// GET action to retrieve all users (listing)
router.get("/", (req, res) => {
  // search database, if no errors, return listing of all users
  User.find({}, (err, users) => {
    if (err) res.send(err);
    // if no errors, retrieve listing and display to client
    res.json(users);
  });
});

// GET user by id action to retrieve a single user by its id
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) res.send(err);
    // if no error, retrieve and display user to client
    res.json(user);
  });
});

// DELETE action by id
router.delete("/:username", (req, res) => {
  console.log(req.headers);
  User.remove({ username: req.params.username }, (err, result) => {
    res.json({ message: "User successfully deleted!" });
  });
});

// export and module function
module.exports = router;
