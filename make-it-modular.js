'use strict';

const filter = require('./mymodule');
const folder = process.argv[2];
const extname = process.argv[3];

filter(folder, extname, function (err, list) {
  if (err) {
    return console.error('There was an error:', err);
  }

  list.map((file) => console.log(file));
});
