var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", {useNewURLParser: true, useUnifiedTopology: true}, (err) => {
  console.log(err ? err : "Connected to Database");
});

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(4000, () => {
  console.log("server is listening on port 4k");
});