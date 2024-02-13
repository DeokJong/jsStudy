const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log('1st', data.toString());
    fs.readFile('./readme.txt',(err,data)=>{
        if(err){
            console.error(err);
        }
        console.log('2nd',data.toString());
        fs.readFile('./readme.txt',(err,data)=>{
            if(err){
                console.error(err);
            }
            console.log('3rd',data.toString());
            fs.readFile('./readme.txt',(err,data)=>{
                if(err){
                    console.error(err);
                }
                console.log('4th',data.toString());
            })
        })
    })
})

//해당 구조는 sync를 맞춘구조 하지만 콜백헬이 존재하게됨
