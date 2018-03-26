"use strict";
let express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/task");
// POST action to save a new task
router.post("/", (req, res) => {
  // creates a new task
  const newTask = new Task(req.body);
  // save it to database
  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    } else {
      // if no errors, send message below to client
      res.json({ message: "Task successfully added!", task });
    }
  });
});

// PUT action by id ('/task/:id'), to update task data in database
router.post("/:task_id", (req, res) => {
  Task.findByIdAndUpdate(
    req.params.task_id,
    req.body,
    { upsert: true, new: true },
    (err, task) => {
      if (err) res.send(err);
      console.log(task);
      // if no error, update and send message below to client
      res.json({ message: "Task successfully updated!", task });
    }
  );
});
// GET action to retrieve all tasks (listing)
router.get("/", (req, res) => {
  // search database, if no errors, return listing of all tasks
  Task.find({}, (err, tasks) => {
    if (err) res.send(err);
    // if no errors, retrieve listing and display to client
    res.json(tasks);
  });
});

// GET all tasks by cropid
router.get("/crop/:cropid", (req, res) => {
  Task.find({ crop_id: req.params.crop_id }, (err, tasks) => {
    if (err) res.send(err);
    // if no error, retrieve and display task to client
    res.json(tasks);
  });
});

// GET all tasks by id action to retrieve a single task by its id
router.get("/:task_id", (req, res) => {
  Task.find({ _id: req.params.task_id }, (err, tasks) => {
    if (err) res.send(err);
    // if no error, retrieve and display task to client
    res.json(tasks);
  });
});

// DELETE action by id
router.delete("/:task_id", (req, res) => {
  Task.remove({ _id: req.params.task_id }, (err, result) => {
    res.json({ message: "Task successfully deleted!" });
  });
});

// export and module function
module.exports = router;
