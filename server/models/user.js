const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema definition
const UserSchema = new Schema(
  {
    first_name: {
      type: String, 
      required: true, 
      max: 100
  },
    family_name: {
      type: String, 
      required: true, 
      max: 100
  },
    date_of_birth: {
      type: Date
  },
    email: {
      type: String, 
      lowercase: true, 
      required: true, 
      match: [/\S+@\S+\.\S+/, 'is invalid'], 
      index: true
  },
    profession: {
      type: String, 
      required: true, 
      max: 100
  }, 
    createdAt: { type: Date, default: Date.now },    
  }, 
);

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