var path = require('path');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

const mongoose = require('mongoose');
const config = require('./config/db.config');
mongoose.connect(config.url, { useNewUrlParser: true });

var indexRouter = require('./routes/index');
var tracksRouter = require('./routes/tracks');
var albumRouter = require('./routes/albums');
var usersRouter = require('./routes/users');
var artistsRouter = require('./routes/artists');


var app = express();
var db = mongoose.connection; 
db.once('open', function(){ console.log("connexion ok "); })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tracks', tracksRouter);
app.use('/albums', albumRouter);
app.use('/users', usersRouter);
app.use('/artists', artistsRouter); 

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
