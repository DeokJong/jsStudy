const fs = require('fs').promises;
fs.readFile('./readme.txt')
    .then((data)=>{
        console.log('1st',data.toString());
        return fs.readFile('readme.txt');
    })
    .then((data)=>{
        console.log('2nd',data.toString());
        return fs.readFile('readme.txt');
    })
    .then((data)=>{
        console.log('3rd',data.toString());
        return fs.readFile('readme.txt');
    })
    .then((data)=>{
        console.log('4th',data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })

//해당 구조는 sync를 맞춘구조 하지만 then헬이 존재함
