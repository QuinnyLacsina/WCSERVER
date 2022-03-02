//Name: Lacsina, Quinny Joyce Ann M.
//Section: WD-201
//App Name: route.js
//Date: March 01, 2022
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method!');
})

app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
})

app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})

app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

app.get('/additional', function(req, res) {
    console.log("Got a GET request for /additional");
    res.send('This is an Additional Page in the GET Method!');
})


var server = app.listen(3800, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})
