const http = require('http');

const express = require('express');
const app = express();
const path = require("path");
const router = express.Router()


app.use(express.static('static'));

app.get('/', function (req, res) {
    res.sendFile('./index.html', { root: __dirname });
});
let pathName = []
const fs = require('fs');
let files = fs.readdirSync('static/pages/');
files.forEach((file) => {
  pathName.push(file);
});
app.get('/pth', function (req, res) {
  res.send(pathName)
});

const hostname = '127.0.0.1';
const port = process.env.port || 4000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});