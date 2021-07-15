const fs = require('fs');
// const fileContent = fs.readSync(process.argv[2], {
//     encoding: 'utf-8',
//     flag: 'r',
// });
const fileContent = fs.readFileSync(process.argv[2], 'utf-8');
console.log(fileContent.split('\n').length-1);