var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var commentscontroller = require('./controllers/comments_controller.js');
mongoose.connect(`mongodb://admin:eventbored2018@ds235418.mlab.com:35418/eventbored`)

// serving static assets
app.use(express.static(path.join(__dirname, '/views')));

app.use(cors()); // for testing

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies

app.use(bodyParser.json());
app.use(logger('dev'));
// app.use(cors({origin: "*"}))
app.use((req, res, next) => {
  const origin = req.get('origin');
  console.log(origin, 'origin')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


// viewed at localhost:8080
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname +'/views/index.html'))
});

app.post('/comment', commentscontroller.create)
app.get('/allcomments', commentscontroller.read)


app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message});
});

module.exports = app;

app.listen(8080);