const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log('1st',data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log('2nd',data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log('3rd',data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log('4th',data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })

//해당 구조는 비동기 구조로 언제 끝날지 순서는 정확히 알 수 없다
