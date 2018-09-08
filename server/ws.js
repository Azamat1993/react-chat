const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});
const users = new Set();

wss.on('connection', function connection(ws) {
  users.add(ws);

  ws.on('message', function incoming(message) {

  });

  ws.on('close', function close() {
    users.delete(ws);
  });
});

module.exports = wss;
