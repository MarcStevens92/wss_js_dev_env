import express from 'express';
import path from 'path';
import open from 'open';

const port =9292;
const app = express();

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