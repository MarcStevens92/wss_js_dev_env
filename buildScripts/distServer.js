import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port =9292;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  //Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy","lastName":"Norton","email":"tammy@gmail.com"},
    {"id": 3, "firstName": "Tina","lastName":"Lee","email":"tina@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});