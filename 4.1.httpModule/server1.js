const http = require('http');

http.createServer((req,res)=>{
    //write와 end는 모두 스트림 방식임
    res.write('<h1>hello Node</h1>');
    res.write('<p>hello Server</p>');
    res.end('<p>hello Man</p>');
})
    //listen을 통해서 실제로 서버가 작동함
    .listen(8080,()=>{
        console.log('running server');
    });


