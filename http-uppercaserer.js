'use strict';
const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]) || 8080;

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    request
      .pipe(map((chunk) => chunk.toString().toUpperCase()))
      .pipe(response);
  } else {
    response.writeHead(405);
  }
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
