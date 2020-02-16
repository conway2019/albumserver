var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var albumRouter = require('./routes/album');
var singerRouter = require('./routes/singer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/album', albumRouter);
app.use('/singer', singerRouter);

module.exports = app;
