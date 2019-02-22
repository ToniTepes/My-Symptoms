var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signuptest');
}

exports.signin = function(req, res) {
    res.render('signintest');
}

exports.dashboard = function(req, res) {
    res.render('dashboard'); // Not sure which handlebars dir to use.
}

