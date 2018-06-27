const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const serverFuncs = require('./index.js');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/ipsN', (req, res) => {
  var ipAddres = Object.keys(req.body).toString();

  serverFuncs.getCollection(ipAddres, function(result){

    if(result !== null && result.ipAddres === ipAddres) {
      console.log("won't increment NEGATIVE!");
      serverFuncs.getBadClicks(function(result) {
          console.log('All NEGATIVE clicks: ' + result);
          res.json(result);
      });
     } else {
        var clicks = Object.values(req.body)[0];
        serverFuncs.badClicks(clicks);
        serverFuncs.save(ipAddres);
        serverFuncs.getBadClicks(function(result) {
          console.log('All NEGATIVE clicks: ' + result);
          res.json(result);
        });
    }
  });
});

app.post('/ipsP', (req, res) => {
  var ipAddres = Object.keys(req.body).toString();

  serverFuncs.getCollection(ipAddres, function(result){
     if(result !== null && result.ipAddres === ipAddres) {
      console.log("won't increment POSITIVE!");
      serverFuncs.getGoodClicks(function(result) {
        console.log('All POSITIVE clicks: ' + result);
        res.json(result);
      });
     } else {
        var clicks = Object.values(req.body)[0];
        serverFuncs.goodClicks(clicks);
        serverFuncs.save(ipAddres);
        serverFuncs.getGoodClicks(function(result) {
          console.log('All POSITIVE clicks: ' + result);
          res.json(result);
        });
    }
  });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))