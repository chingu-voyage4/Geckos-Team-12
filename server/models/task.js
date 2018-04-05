const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// crop schema definition
const Task = new Schema({
  name: {
    type: String,
    required: "Please enter a task name"
  },
  score: {
    type: Number,
    required: true
  },
  steps: [{ title: String, description: String, status: Boolean }],
  category: {
    type: String
  },
  short_desc: {
    type: String
  },
  difficulty_level: {
    type: String
  },
  crop_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crop"
  },
  createdAt: Date
});

// Export crop schema model for use elsewhere
module.exports = mongoose.model("Task", Task);
