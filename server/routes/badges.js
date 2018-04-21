"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Badge = require("../models/badge");

// POST action to save a new badge
router.post("/", (req, res) => {
  // creates a new badge
  const newBadge = new Badge(req.body);
  // save it to database
  newBadge.save((err, badge) => {
    if (err) {
      res.send(err);
    } else {
      // if no errors, send message below to client
      res.json({ message: "Badge successfully added!", badge });
    }
  });
});

// PUT action by id ('/badge/:id'), to update badge data in database
router.post("/:id", (req, res) => {
  Badge.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { upsert: true, new: true },
    (err, badge) => {
      if (err) res.send(err);
      console.log(badge);
      // if no error, update and send message below to client
      res.json({ message: "Badge successfully updated!", badge });
    }
  );
});
// GET action to retrieve all badges (listing)
router.get("/", (req, res) => {
  // search database, if no errors, return listing of all badges
  Badge.find({}, (err, badges) => {
    if (err) res.send(err);
    // if no errors, retrieve listing and display to client
    res.json(badges);
  });
});

// GET badge by id action to retrieve a single badge by its id
router.get("/:id", (req, res) => {
  Badge.findOne({ _id: req.params.id }, (err, badge) => {
    if (err) res.send(err);
    // if no error, retrieve and display badge to client
    res.json(badge);
  });
});

// DELETE action by id
router.delete("/:id", (req, res) => {
  Badge.remove({ _id: req.params.id }, (err, result) => {
    res.json({ message: "Badge successfully deleted!" });
  });
});

// export and module function
module.exports = router;
