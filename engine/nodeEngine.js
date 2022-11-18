const http = require('http');

const express = require('express');
const app = express();
const path = require("path");
const router = express.Router()

app.use(express.static('engine'));
app.use('../scripts', express.static('scripts'));


app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

const hostname = '127.0.0.1';
const port = process.env.port || 4000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});