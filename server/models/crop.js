const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crop schema definition
const CropSchema = new Schema(
  {
    name: {
      type: String, 
      required: 'Please enter a crop name', 
      max: 100
  },
    category: {
      type: String, 
      required: true, 
      max: 100
  },
    image: {
      type: String, 
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

// Export crop schema model for use elsewhere
module.exports = mongoose.model('Crop', CropSchema);
