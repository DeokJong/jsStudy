function helloWorld(){
    console.log("Hello world");
    helloNode();
}

function helloNode (){
    console.log('hello node');
    console.trace();
}

console.time();
helloWorld();
console.timeEnd();
