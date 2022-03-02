//Name:
//App Name:
//Description: This program uses POST method and the result shows that is displays the queried string in pain text format.
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: false})


app.use(express.static('public'))
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res){
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        course: req.body.course,
        age: req.body.age,
        comments: req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
})


var server = app.listen (6500, function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });