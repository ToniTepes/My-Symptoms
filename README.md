ASF Notes:

.Added README.md

.Added Nodemon
    -Starts up node app so that you can visit a particular url in the browser, and the app will show up.
    -A global npm package.

.Added Webpack
    -Enables useage of SAS, ES6, and Browser Sync

.Added .env

.Added .env.default

.Added loginroutes.js
    -'databasename

.Added to server.js
    -var login = require('./routes/loginroutes'); to line #4
    -var bodyParser = require('body-parser'); to line #5
    -app.use(bodyParser.urlencoded({ extended: true })); to line #16
    -app.use(bodyParser.json()); to line #17
    -Login and registration to lines #19-34

