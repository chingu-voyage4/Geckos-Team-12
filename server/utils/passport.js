const passport = require("passport"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  LocalStrategy = require("passport-local").Strategy,
  User = require("../models/user"),
  jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.JWT_SECRET
  };

passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    console.log("jwt auth", jwtPayload);
    User.find({ username: jwtPayload.sub }, (err, user) => {
      if (err) return done(err, false);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  })
);
passport.use(
  new LocalStrategy((username, password, done) => {
    //see if user email exists in dB
    //it not, call 'done' without the object
    //if it does, compare password and if same call 'done' with the user object

    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      console.log("user:", user);
      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false);

        return done(null, user);
      });
    });
  })
);
