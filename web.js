var express = require('express'),
    fs      = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if (err) {
      return console.error(err);
    }

    response.send(data.toString('ascii'));
  });  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
