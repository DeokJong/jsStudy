const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('<h1>hello Node</h1>');
    res.write('<p>hello Server</p>');
    res.end('<p>hello Man</p>');
});

server.addListener("listening", ()=>{
    console.log('server running');
});
server.on('error',(err)=>{
    console.error(err);
});

setTimeout(()=>{
    server.listen(8080);
},1000);
