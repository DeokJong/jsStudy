const fs =require('fs');
const zlib = require('zlib')


const readStream = fs.createReadStream('./readme.txt',{highWaterMark:16});
//압축을 하는 스트림 형성
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writemeG.txt');

//readStream과 zlibSteram을 파이핑하여 압축을 시킴.
//이후 zlibStream과 writeStream을 파이핑하여 압축한 결과물을 writeStream으로 보냄
readStream.pipe(zlibStream).pipe(writeStream);

//압축을 했기 때문에 해당 결과물은 제대로 보이지 않음
