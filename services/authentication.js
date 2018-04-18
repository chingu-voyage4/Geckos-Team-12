const jwt = require("jwt-simple"),
  User = require("../models/user");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.username, iat: timestamp },
    process.env.JWT_SECRET
  );
};

exports.signup = (req, res, next) => {
  const { username, password } = req.body;
  //if form is incomplete send error
  if (!username || !password)
    return res
      .status(422)
      .send({ error: "You must provide Email and Password" });
  //Check database for email
  User.findOne({ username }, (err, existingUser) => {
    if (err) return next(err);
    //if existing user send error
    if (existingUser)
      return res.status(422).send({ error: "Username is in use" });

    //if no existing user create and save it
    const user = new User({ username, password });
    user.save((err, newUser) => {
      //send error if
      if (err) return next(err);
      //Send success response
      res.json({ token: tokenForUser(newUser) });
    });
  });
};

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
