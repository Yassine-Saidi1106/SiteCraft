var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require("http") // 1 importation de protocol web 
const{connectToMongoDB} = require("./db/db")

var indexRouter = require('./routes/index');// importina routes
var usersRouter = require('./routes/users');

require("dotenv").config() // config .env

var app = express(); // le debut de lexpress

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});
const server = http.createServer(app);
server.listen(process.env.port, () => {
  connectToMongoDB(),
  console.log("App is running on port 5000");
});