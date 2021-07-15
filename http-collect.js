'use strict';

const http = require('http');
const url = process.argv[2];
let body = '';

http
  .get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('error', console.error);
    response.on('end', () => {
      console.log(body.length);
      console.log(body);
    });
  })
  .on('error', console.error);
