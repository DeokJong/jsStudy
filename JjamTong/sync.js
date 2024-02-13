const fs = require('fs');

const data =fs.readFileSync('./readme.txt');
console.log('1st',data.toString());
console.log('2nd',data.toString());
console.log('3rd',data.toString());
console.log('4th',data.toString());
