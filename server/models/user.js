const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt-nodejs");
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
    type: String
  },
  score: {
    type: String
  },
  crops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crop" }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});

//on save hook, encrypt the password
UserSchema.pre("save", function(next) {
  const user = this;
  console.log("saving", user);
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

//Export model
module.exports = mongoose.model("User", UserSchema);
