const http = require('http');

const express = require('express');

// const livereload = require("livereload")
// const connectLiveReload = require("connect-livereload")

// const liveReloadServer = livereload.createServer()
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/")
//   }, 10)
// })

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


const PORT = 3500

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at: ${PORT}`);
});

// app.use(connectLiveReload())