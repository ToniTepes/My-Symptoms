### Dear Doctor
***
## Team Members:
* Sydney Dunlap
* Antonio Foushee
* Laura Shortridge 
* Robert Tarkenton	
***
## Project Description:
Our app will enable people to record their symptoms (and severity), along with their intake of food and liquid. This log can be shared with their healthcare provider.
We would like to add the ability to track correlations between the symptoms and intake over time.
***
## Project Requirements:
* Use a Node and Express Web Server;
* Be backed by a MySQL Database an ORM (not necessarily Sequelize);
* Have both GET and POST routes for retrieving and adding new data;
* Be deployed using Heroku (with Data);
* Utilize at least one new library, package, or technology that we haven’t discussed;
* Have a polished frontend / UI;
* Have folder structure that meets MVC Paradigm;
* Meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md
***
## New technology used:
* BULMA (CSS)

## Authentication Bulid Notes:
* Changes
    - index.js 
        - L:8
            - - From: 'var config = require(__dirname + "/../config/config.json")[env];'
            - - To: 'var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];'
        - L:9
            - - Added: var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];'
        - L:26
            - - Added: 'index.js'
        - L:35
            - - Added: ''associate' in'
    - server.js
        - L:9-12
            - - Added:
                'var passport   = require('passport')
                var session    = require('express-session')
                //var bodyParser = require('body-parser')'
        - L:25-28
            - - Added:
                '// For Passport
                app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
                app.use(passport.initialize());
                app.use(passport.session()); // persistent login sessions'
        - L:10
            - - Added:
                'var env = require('dotenv').load();'
        - L:63-71
            - - Added:
                '//Models
                var models = require("./models");

                //Sync Database
                models.sequelize.sync().then(function() {
                    console.log('Nice! Database looks fine')
                }).catch(function(err) {
                    console.log(err, "Something went wrong with the Database Update!") 
                });'
        - L:46-47
            - - Added:
                'var authRoute = require('./routes/auth.js')(app);'
        - L:43-44
            - - Added:
                '//load passport strategies
                require('./app/config/passport/passport.js')(passport, models.user);'
        - L:4
            - - Added:
                'var authRoute = require('./app/routes/auth.js')(app,passport);'
                
    - Added: .env
        - L:1
            - - 'NODE_ENV='development''
    - .gitignore
            - - Added:
                'config/config.json'
    - Added: './controllers'
    - Added: 'authcontroller.js'
    - Added: 'auth.js'
    - Added './passport' in './config'
    - Added: 'passport.js' in './passport'
* Comments
    - users.js / user.sql
        - L:32-37 / L:10
            - - I have left the 'heal_id' commencted out. Unsure if it requires a special practice.
                    -   Foreign key functions not straignted out properly. (sorry!)
                    -   How do we want the 'heal_id' to be generated?
    - passport.js 
        - L:12
            - - Could this be used to generate a 'heal_id'
    - auth.js
        - L:12
            - - Not sure which handlebars dir to use.
    - authcontroller.js
        - L:12
            - - Not sure which handlebars dir to use.
        
* Potentially changing 'config.json' to 'config.js'
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 