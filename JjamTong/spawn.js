const spawn  = require('child_process').spawn;

const process = spawn('python',['test.py']);

process.stdout.on('data',(data)=>{
    console.log('run stdout');
    console.log(data.toString())
})

process.stderr.on('data',(data)=>{
    console.log('run stderr');
    console.error(data.toString());
})
