
//이 파일에서 발생하는 에러는 모두 uncaughException을 통해서 검출된다.
process.on('uncaughtException',(err)=>{
    console.log('예기치 못한 에러',err);
});

setInterval(()=>{
    throw new Error('에러 발생!')
},1000);

setTimeout(()=>{
    console.log('실행됩니다.')
},1000);
