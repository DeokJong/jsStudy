const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url,req.headers.cookie);


    //'Set-Cookie'는 쿠키를 만든는 명령어
    //'CookieName=CookieValue' 로 쿠키가 지정됨
    res.writeHead(200,{'Set-Cookie' : 'mycookie=test'});
    res.end('Hello cookie');
})
    .listen(8083,()=>{
        console.log('Running Server at 8083 port')
    })


//favicon.ico는 크롬이 아이콘을 찾기위해 자동으로 수행되는 것.

//쿠키는 부가적인 정보이기에 헤더에 저장.
