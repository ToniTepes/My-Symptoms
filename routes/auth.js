var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signuptest', authController.signup);
    app.get('/signintest', authController.signin);
    app.post('/signuptest', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));
    app.get('/dashboard', isLoggedIn, authController.dashboard); // Not sure which handlebars dir to use
    app.get('/logout', authController.logout);
    app.post('/signintest', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}