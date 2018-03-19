const mongoose = require('mongoose');
const Crop = require('../models/crop');

// POST action to save a new crop
function postCrop(res, req) {
    // creates a new crop
    const newCrop = new Crop(req.body);
    // save it to database
    newCrop.save((err, crop) => {
        if(err) {
            res.send(err);
        }
        else { // if no errors, send message below to client
            res.json({ message: "Crop successfully added!", crop });
        }
    });
}

// GET action to retrieve all crops (listing)
function getCrops(req, res) {
    // search database, if no errors, return listing of all crops
    const crops = Crop.find({});
    crop.exec((err, crops) => {
        if(err)res.send(err);
        // if no errors, retrieve listing and display to client
        res.json(crops);
    });
}

// GET crop by id action to retrieve a single crop by its id
function getCrop(req, res) {
    Crop.findById(req.params.id, (err, crop) => {
        if(err) res.send(err);
        // if no error, retrieve and display crop to client
        res.json(crop);
    });
}

// DELETE action by id
function deleteCrop(req, res) {
    Crop.remove({_id: req.params.id}, (err, result) => {
        res.json({ message: "Crop successfully deleted!", result });
    });
}

// PUT action by id ('/crop/:id'), to update crop data in database
function updateCrop(req, res) {
    Crop.findById({_id: req.params.id}, (err, crop) => {
        if(err) res.send(err);
        Object.assign(crop, req.body).save((err, crop) => {
            if(err) res.send(err);
            // if no error, update and send message below to client
            res.json({ message: 'Crop successfully updated!'});
        });
    });
}

// export and module function
module.exports = { postCrop, getCrops, getCrop, deleteCrop, updateCrop };