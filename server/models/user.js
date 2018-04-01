const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema definition
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    max: 20
  },
  role: {
    type: String,
    required: "Please provide a role. user or admin"
  },
  score: {
    type: String
  },
  crops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crop" }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
  createdAt: Date,
  updatedAt: Date
});

// Sets the timestamp createdAt parameter equal to the current time
UserSchema.pre("save", next => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Export model
module.exports = mongoose.model("User", UserSchema);
