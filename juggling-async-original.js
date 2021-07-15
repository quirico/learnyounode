'use strict';

const http = require('http');
let [nodeCmd, scriptFile, ...rest] = process.argv;
let results = [];
let count = 0;

const getUrlsContent = (url) => {
  let content = '';

  http
    .get(url, (response) => {
      response.setEncoding('utf8');
      response.on('data', (data) => {
        content += data;
      });
      response.on('error', console.error);
      response.on('end', () => {
        results[count] = content;
        console.log(content);
        count++;
      });
    })
    .on('error', console.error);
};

do {
  getUrlsContent(rest.shift());
} while (count < rest.length - 1);

results.map((r, i) => console.log(i, r));
