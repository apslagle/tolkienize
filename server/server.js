var express = require('express');
var Epic = require('./epicModel.js');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var path= require('path');
//var html = require('html');
var app = express();
var MONGODB_URI = "mongodb://heroku_30tmj194:rdg630t7ic9me2judc5bgd92p6@ds053176.mlab.com:53176/heroku_30tmj194";
var port = process.env.PORT || 3021;



mongoose.connect(MONGODB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open');
});

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/../client');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));



app.get('/', function(req, res) {
  res.render('index');
});
app.post('/epic', function(req, res) {
  var hero = req.body;
  console.log("My hero! " + hero.name + hero.story);
  if (hero) {
    Epic.Epic.create({
      name: hero.name,
      story: Epic.createNewEpic(hero)
    });
    console.log('hero logged in database')
  }
  res.send();
});
app.get('/epic', function(req, res) {
  Epic.Epic.find({}, function(err, data){
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
      console.log('node-express-mongoose listening on ' + port);
  });

module.exports = {
  app: app,
  db: db
};