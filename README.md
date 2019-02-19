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

.Currently stuck at:
    -Error Code: 1072. Key column 'user_id' doesn't exist in table
        --after trying to run the schema...
        & then
    -0 row(s) affected, 7 warning(s): 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead. 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead. 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead. 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead. 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead. 3719 'utf8' is currently an alias for the character set UTF8MB3, but will be an alias for UTF8MB4 in a future release. Please consider using UTF8MB4 in order to be unambiguous. 3778 'utf8_unicode_ci' is a collation of the deprecated character set UTF8MB3. Please consider using UTF8MB4 with an appropriate collation instead
        --after trying to run the login tables for the users.


