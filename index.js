const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const str = new Array(100).fill().map(() => 'LONGLONGLONGLONGSTRING').join('-');

wss.on('connection', ws => {
  ws.send('ping');
  ws.send('hello');
  ws.send(str);
});

server.listen(18088);
