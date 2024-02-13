const fs = require('fs');
const fsp = require('fs').promises;
/*
노드가 기본적으로 제공하는 비동기 함수들의 콜백 에러는 노드 프로세서를 멈추지는 않는다.

아마 비동기 함수에서 매개변수로 콜백 함수를 쓸때,
그 콜백함수가 에러를 받는다면 따로 트라이 캐치문을 사용하지 않아도 되는 것으로 보인다.
*/
setInterval(()=>{
    fs.unlink('./abcd.js',(err)=>{
        if(err){
            console.log(err);
        }
    });
},1000);

/*
promises의 경우 then과 catch로 에러처리를 한다.
이를 사용하지 않아도 정상작동은 하나 에러가 길게 나온다.
또한 강제종료도 할 수 있으니, catch를 붙여야한다.
*/
setInterval(()=>{
    fsp.unlink('./abcd.js');
},1000);

