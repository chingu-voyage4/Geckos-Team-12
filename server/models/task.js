const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// crop schema definition
const Task = new Schema({
  name: {
    type: String,
    required: "Please enter a task name"
  },
  category: {
    type: String,
    required: true
  },
  short_desc: {
    type: String
  },
  difficulty_level: {
    type: String
  },
  steps: [{ title: String, description: String, status: Boolean }],
  crop_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crop"
  },
  createdAt: Date
});

// Export crop schema model for use elsewhere
module.exports = mongoose.model("Task", Task);
