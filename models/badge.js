const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// crop schema definition
const Badge = new Schema({
  name: {
    type: String,
    required: "Please enter a badge name"
  },
  short_desc: {
    type: String
  },
  goal: {
    type: Number
  },
  image_url: {
    type: String
  },
  createdAt: Date
});

// Export crop schema model for use elsewhere
module.exports = mongoose.model("Badge", Badge);
