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
    timestamp: {
      type: Date, 
      default: Date.now
    },
  }
);

// Sets the timestamp parameter equal to the current time
CropSchema.pre('save', next => {
  now = new Date();
  if(!this.timestamp) {
    this.timestamp = now;
  }
  next();
});


// Virtual for crop's URL
CropSchema
.virtual('url')
.get(function () {
  return '/crop' + this._id;
});

// Export crop schema model for use elsewhere
module.exports = mongoose.model('Crop', CropSchema);