var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var data = "this is my intial value" ;

app.get('/', function(request, response) {
data = fs.readFileSync('index.html','utf8');
response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
