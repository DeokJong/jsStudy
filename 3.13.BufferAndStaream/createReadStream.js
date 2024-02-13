const fs = require('fs');

//createReadStream은 한번에 64kb씩 불러옴
const readStream = fs.createReadStream('./readme3.txt',{highWaterMark:16})

const data =[];

readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data: ',chunk,chunk.length);
});

readStream.on('end',()=>{
    console.log('end: ' ,Buffer.concat(data).toString());
});//전체 문장을 읽는 것

readStream.on('error',(err)=>{
    console.error('error: ',err);
});


//buffer 방식은 모든 데이터를 한번에 보낸다. 이로 인해 전달된 데이터보다 서버 메모리가 적으면 터져버린다.
//stream 방식은 데이터를 분할하여 조금씩 보내 메모리를 효율적으로 사용할 수 있다.
