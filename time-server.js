'use strict';
const net = require('net');

const port = process.argv[2] || 8080;
const date = new Date();
const output = `${[
  date.toISOString().substr(0, 10),
  date.toLocaleTimeString('it').substr(0, 5),
].join(' ')}
`;

const server = net.createServer(function (socket) {
  socket.end(output);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
