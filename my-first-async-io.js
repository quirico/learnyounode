'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, fileContent) {
  if (err) {
    throw Error(err);
  } else {
    console.log(fileContent.split('\n').length - 1);
  }
});
