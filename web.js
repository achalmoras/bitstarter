var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var string2read = fs.readFileSync('/home/ubuntu/bitstarter/bitstarter/index.html');
  var buf = new Buffer(string2read);
  buf.toString('utf8',0, buf.length);
  response.send('buf');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
