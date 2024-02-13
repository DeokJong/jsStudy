const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');

writeStream.on('finish',()=>{
    console.log('Data Write Done');
});


writeStream.write('write this letter\n');
writeStream.write('one more write\n');
writeStream.write('one one more write');
writeStream.end();
