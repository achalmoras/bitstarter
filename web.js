var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var string2read = fs.readFile(index.html);
  var buf = new Buffer(string2read.length);
  buf = string2read;
  response.send('buf');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
