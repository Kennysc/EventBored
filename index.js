var express = require('express')
var app = express();
var path = require('path')

// serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// viewed at localhost:8080
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname +'/index.html'))
});

app.listen(8080);