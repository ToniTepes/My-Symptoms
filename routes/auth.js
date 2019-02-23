const authController = require("../controllers/authController");

module.exports = (app, passport) => {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.get("/index", isLoggedIn, authController.index);
  app.get("/logout", authController.logout);
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/index",
      failureRedirect: "/signup",
      failureFlash: true
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/index",
      failureRedirect: "/signin",
      failureFlash: true
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
