const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CropSchema = new Schema(
  {
    crop_name: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 100},
    timestamp: {type: Date},
  }
  collections: 'crops'
);

//Export model
module.exports = mongoose.model('Crop', CropSchema);