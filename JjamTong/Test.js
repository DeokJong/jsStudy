const worker = require('worker_threads');

const run = (data)=>{
    console.log(data);
}
console.log(1);
setTimeout(run,500,'firstLine');
setTimeout(run,1000,'secondLine');
setTimeout(run,500,'thirdLine');
console.log(2);
