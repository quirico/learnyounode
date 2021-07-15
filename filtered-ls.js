'use strict';

const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extname = `.${process.argv[3]}`;

fs.readdir(folder, 'utf-8', function (err, files) {
  if (err) {
    return console.error('There was an error:', err);
  } else {
    files
      .filter((file) => path.extname(file) === extname)
      .map((file) => console.log(file));
  }
});
