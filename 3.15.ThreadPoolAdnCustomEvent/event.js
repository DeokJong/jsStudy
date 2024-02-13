const EventEmitter = require('events')

const myEvent= new EventEmitter();

myEvent.addListener('event1',()=>{
    console.log('event 1');
});

//on == addListener
myEvent.on('event2',()=>{
    console.log('event 2');
});
//한 이벤트에 두개의 콜백함수가 들어가 있는 경우
myEvent.on('event2',()=>{
    console.log('event 2 addition');
});

//once only one call
myEvent.once('event3',()=>{
    console.log('event 3')
})

myEvent.emit('event1');
myEvent.emit('event2');

//이벤트3는 once로 만들었기에 한번 호출되고 더이상 호출 안됨.
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event3',()=>{
    console.log('event 4');
})

const listener = ()=>{
    console.log('event5');
}
myEvent.on('event5',listener);

//이벤트에 존재하는 해당 콜백함수를 모두 지움.
myEvent.removeListener('event5',listener);
myEvent.emit('event5');

//콜백함수가 몇개 등록되어있는지 찾는 함수
//once역시 등록은 되어있음 사라지는게 아님
console.log(myEvent.listenerCount('event2'));
console.log(myEvent.listenerCount('event3'));
