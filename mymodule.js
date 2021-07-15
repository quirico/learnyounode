const fs = require('fs');
const path = require('path');

const filterFolderFileByExt = (folder, extname, callback) => {
  fs.readdir(folder, 'utf-8', function (err, files) {
    if (err) {
      return callback(err);
    }
    callback(
      null,
      files.filter((file) => path.extname(file) === `.${extname}`),
    );
  });
};

module.exports = filterFolderFileByExt;
