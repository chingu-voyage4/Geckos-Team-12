const express = require('express');
const app = express();
const itemRouter = express.Router();

// Require Item model in our routes module
const Crop = require('../models/Crop');

// Define store route
itemRouter.route('/add/post').post(function (req, res) {
    const crop = new Item(req.body);
        crop.save()
      .then(crop => {
      res.json('Crop added successfully');
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

// Define get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
    Item.find(function (err, itms){
      if(err){
        console.log(err);
      }
      else {
        res.json(itms);
      }
    });
  });

  // Define edit route
itemRouter.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Item.findById(id, function (err, crop){
        res.json(crop);
    });
  });
  
  //  Define update route
itemRouter.route('/update/:id').post(function (req, res) {
    Item.findById(req.params.id, function(err, crop) {
      if (!crop)
        return next(new Error('Could not load Document'));
      else {
        // do your updates here
        crop.crop = req.body.crop;
  
        crop.save().then(crop => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });

  // Define delete | remove | destroy route
itemRouter.route('/delete/:id').get(function (req, res) {
    Item.findByIdAndRemove({_id: req.params.id},
         function(err, crop){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  
  module.exports = itemRouter;