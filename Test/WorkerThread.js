const {isMainThread,workerData,Worker, parentPort} = require('worker_threads');

if(isMainThread){
    const threads = new Set();

    threads.add(new Worker(__filename,{
        workerData : {start : 1,}
    }));
    threads.add(new Worker(__filename,{
        workerData : {start : 2,}
    }));

    //이벤트 함수 부착
    for (let worker of threads) {
        setTimeout(()=>{
            worker.on('message', (value) => console.log('from worker', value));
            worker.on('error', (err) => console.error('Worker Error:', err));
            worker.on('exit', () => {
                threads.delete(worker);
                if (threads.size === 0) {
                    console.log('All workers are done.');
                }
            });
        },3000)

    }
}
else{
    parentPort.postMessage(workerData.start+100);
}
/*
1. 메인 스레드에서 서브 스레드 두개를 생성하였다.
2. 스레드는 병렬적으로 실행되기에 해당 스크립트가 여러개 실행이 될것이다.

===분기 1===
3. 서브 스레드는 메인 스레드가 아니므로 setTimeout을 거친 후에 메인 스레드에게 Message이벤트를 보낼 것이다.

===분기2===
3. 메인 스레드는 스레드를 추가한 다음 바로 반복문을 통해서 Set내부에 있는 스레드를 꺼내 각자 스레드에서 실행해서 보낸 이벤트를 확인 할 것이다.


!의문점!
병렬적으로 돌아가는 상황에서 setTimeout은 부모에게 이벤트를 보내는 시간을 지연시킬 것이다.
부모스레드에서 따로 지연을 걸지 않았으므로 내가 생각하기에 해당 구조는 실패가 일어날 것이라고 생각했다.
그러나 실제로 실행시켰을때는 반복문 내에서 이벤트를 받고 출력시키는 시간이 모두 3초정도 지연됐다.

그러면 on을 통해 이벤트가 부착되며 실행되는 시간은 정적으로 결정나고, 그 결과는 동적으로 정해지는 건가??
*/
