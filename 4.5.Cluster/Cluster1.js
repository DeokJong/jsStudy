const cluster = require ('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

//마스터는 서버가 아닌 라우드로빈 알고리즘으로 요청을 분산함
if(cluster.isMaster){
    console.log(`Master Process PID : ${process.pid}`);

    for(let i =0;i<numCPUs-2;i++){
        cluster.fork();
    }

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`${worker.process.pid} worker done!`);
        console.log('code',code,'signal',signal);
        cluster.fork();
    });
}
else{
    http.createServer((req,res)=>{
        res.writeHead(200,{'Context-type':'text/html; charset=utf-8'});
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster</p>');

        setTimeout(()=>{
            process.exit(1);
        },1000);
    }).listen(8080);
    console.log(`${process.pid} Worker Running!`);
}
