const express = require('express');
const app = express();
const http = require('http');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => console.log(req))

app.listen(8080, () => console.log('Example app listening on port 8080!'))