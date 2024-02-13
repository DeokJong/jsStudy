const fs =require('fs');
const zlib = require('zlib')


//16바이트씩 나눠서 읽기
const readStream = fs.createReadStream('./readme.txt',{highWaterMark:16});

const writeStream = fs.createWriteStream('./writeme.txt');

//readStream과 wirteStream을 pipe로 연결함
//이로 인해 readStream이 16바이트씩 pipe를 경유하여 writeStream으로 보냄
//이러한 과정을 파이핑이라고 함
readStream.pipe(writeStream);
