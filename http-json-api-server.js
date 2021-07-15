'use strict';
const http = require('http');
const url = require('url');

const port = Number(process.argv[2]) || 8080;
const server = http.createServer((request, response) => {
  url = url.parse(request.url, true);
  console.log(url);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
