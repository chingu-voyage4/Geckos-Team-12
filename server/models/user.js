const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema definition
const UserSchema = new Schema(
  {
    username: {
      type: String, 
      required: true, 
    },
    password: {
      type: String, 
      required: true, 
      max: 20
    },
    growingCrops: {
      type: String
    },
    score: {
      type: String
    }, 
    {timestamps: true});

// Sets the timestamp createdAt parameter equal to the current time
CropSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
  });


//Export model
module.exports = mongoose.model('User', UserSchema);