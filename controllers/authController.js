let authController = module.exports;

authController.signup = (req, res) => {
  // console.log(req.flash("error"));
  res.render("signup", { style: "styles.css", message: req.flash("error") });
};

authController.signin = (req, res) => {
  res.render("signin", { style: "styles.css", message: req.flash("error") });
};

authController.index = (req, res) => {
  res.render("index", { style: "styles.css" });
};

authController.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
