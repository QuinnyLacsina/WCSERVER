//Name:
//App Name:
//Description: This program uses GET method and the result shows that is displays the queried string in pain text format.
var express = require('Express');
var app = express();


app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res){
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        course: req.query.course,
        age: req.query.age,
        comments: req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
});


var server = app.listen (5400, function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });