var express = require('express');
var path= require('path');
var open=require('open');

var port =9292;
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
;})

app.listen(port, function(err){
  if(err){
    consol.log(err);
  } else {
    open('http://localhost:' + port);
  }
});