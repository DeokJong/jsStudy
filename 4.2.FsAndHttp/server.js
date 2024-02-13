const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(async (req,res)=>{
    //writeHead는 읽어서 내보낼 파일의 형식을 지정해줌
    try {
        res.writeHead(200,{'content-type':'text/html; charset=utf-8'});
        const data = await fs.readFile('./server2.html');
        res.end(data);
    }
    catch (error){
        res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(error.message);
    }
});

server.addListener("listening", ()=>{
    console.log('server running');
});
server.on('error',(err)=>{
    console.log('Error Detect: Server Running')
    console.error(err);
});

setTimeout(()=>{
    server.listen(8080);
},1000)
