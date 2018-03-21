const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crop schema definition
const CropSchema = new Schema(
  {
    name: {
      type: String, 
      required: 'Please enter a crop name', 
  },
    category: {
      type: String, 
      required: true, 
  },
    image_url: {
      type: String, 
    }, 
    short_desc: {
      type: String, 
    },
    difficulty_level: {
      type: String, 
    },
    best_season: {
      type: String, 
    },
    climate: {
      type: String, 
    },    
    timestamps: true});

// Sets the timestamp createdAt parameter equal to the current time
CropSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Export crop schema model for use elsewhere
module.exports = mongoose.model('Crop', CropSchema);