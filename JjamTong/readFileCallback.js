const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1 ',data.toString());
});

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2 ',data.toString());
});

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3 ',data.toString());
});

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('4 ',data.toString());
});

//해당 구조는 비동기 구조로 언제 끝날지 순서는 정확히 알 수 없다
