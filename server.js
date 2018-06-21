const express = require('express');
const app = express();
const http = require('http');
//const session = require('express-session');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 900000 }}))


app.get('/', (req, res) => {

  //console.log(req.query);
  //console.log(res.statusCode);
  //req.user = 'hardcoded';

});

/*
app.get('/logout', (req, res) => {
  console.log('logout ', req.user);
  req.user = null;
  console.log('logOut ', req.user)
});
*/

app.post('/', (req, res) => console.log(req.body));

app.listen(8080, () => console.log('Example app listening on port 8080!'))