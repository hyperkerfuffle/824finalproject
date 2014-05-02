/*
 * Setup:
 * 1. Install node.js
 * 2. npm install express.io
 * 
 * Run server:
 * 1. node server.js (might need sudo)
 */

var express = require('express.io');
var app = express();
app.http().io();

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html')
});

app.use('/static', express.static(__dirname + '/'))

app.io.route('connection', function (req) {
  console.log('connection received');
  req.io.emit('event', {hello: 'world'});
});

app.listen(80);

