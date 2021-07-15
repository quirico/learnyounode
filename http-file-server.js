'use strict';
const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]) || 8080;
const file = process.argv[3];

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  fs.createReadStream(file).pipe(response);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
