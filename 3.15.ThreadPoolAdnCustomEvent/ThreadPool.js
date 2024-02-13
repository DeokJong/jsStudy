const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
   console.log('1',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('2',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('3',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('4',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('5',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('6',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('7',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('8',Date.now()-start);
});


//반복해서 알겠지만 기본적으로 노드는 백그라인드에서 돌아가는게 4개씩 돌아간다.
//SET UV_THREADPOOL_SIZE=8 이러면 스레드가 기본적으로 8개씩 돌아간다.
