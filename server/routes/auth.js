"use strict";
const express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  Authentication = require("../services/authentication"),
  requireAuth = passport.authenticate("jwt", { session: false }),
  requireSignIn = passport.authenticate("local", { session: false });

router.post("/signin", requireSignIn, Authentication.signin);

router.post("/signup", Authentication.signup);

// export and module function
module.exports = router;
