const fs = require('fs');

console.log('before: ',process.memoryUsage().rss);

const readStream = fs.createReadStream('./bigText.txt');
const writeStream = fs.createWriteStream('./bigText3.txt');
readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('buffer : ',process.memoryUsage().rss);
});

