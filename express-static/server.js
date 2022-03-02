//Name: Lacsina, Quinny Joyce Ann M.
//Section: WD-201
//App Name: server.js
//Date: February 24, 2022
const { response } = require("Express");
  var express = require("Express");

  var app = express();

  app.use(express.static('public'));

  app.get("/", function(request, response){
    response.send("Successfully created the second App!");
  });

  var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
  }
  );