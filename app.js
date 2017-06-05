//Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

//Passport
var passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

//Load .env file
//var dotenv = require('dotenv');
//dotenv.load();

// routes ======================================================================
require('./routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.listen(3000);