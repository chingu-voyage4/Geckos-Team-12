"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Crop = require("../models/crop"),
  passport = require("passport"),
  requireAuth = passport.authenticate("jwt", { session: false });

console.log("crops router");
// POST action to save a new crop
router.post("/", requireAuth, (req, res) => {
  // creates a new crop
  const newCrop = new Crop(req.body);
  // save it to database
  newCrop.save((err, crop) => {
    if (err) {
      res.send(err);
    } else {
      // if no errors, send message below to client
      res.json({ message: "Crop successfully added!", crop });
    }
  });
});

// PUT action by id ('/crop/:id'), to update crop data in database
router.post("/:id", requireAuth, (req, res) => {
  Crop.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { upsert: true, new: true },
    (err, crop) => {
      if (err) res.send(err);
      console.log(crop);
      // if no error, update and send message below to client
      res.json({ message: "Crop successfully updated!", crop });
    }
  );
});
// GET action to retrieve all crops (listing)
router.get("/", (req, res) => {
  // search database, if no errors, return listing of all crops
  console.log("fetching crops");
  Crop.find({}, (err, crops) => {
    if (err) res.send(err);
    console.log("crops found");
    // if no errors, retrieve listing and display to client
    res.json(crops);
  });
});

// GET crop by id action to retrieve a single crop by its id
router.get("/:id", (req, res) => {
  Crop.findOne({ _id: req.params.id }, (err, crop) => {
    if (err) res.send(err);
    // if no error, retrieve and display crop to client
    res.json(crop);
  });
});

// DELETE action by id
router.delete("/:id", requireAuth, (req, res) => {
  Crop.remove({ _id: req.params.id }, (err, result) => {
    res.json({ message: "Crop successfully deleted!" });
  });
});

// export and module function
module.exports = router;
