var express = require('express');
var Epic = require('./epicModel.js');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var path= require('path');
//var html = require('html');
var app = express();

var port = process.env.PORT || 3021;



mongoose.connect('mongodb://localhost/middlearthify');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open');
});

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/../Client');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../Client'));



app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
      console.log('node-express-mongoose listening on ' + port);
  });

module.exports = {
  app: app,
  db: db
};