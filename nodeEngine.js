const http = require('http');

const express = require('express');

const livereload = require("livereload")
const connectLiveReload = require("connect-livereload")

const liveReloadServer = livereload.createServer()
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/")
  }, 10)
})

const app = express();


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

app.use(connectLiveReload())

const hostname = '127.0.0.1';
const port = process.env.port || 3500;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});