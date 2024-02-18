const express = require('express');
const path = require('path');
const app = express();

/*순서
* 1.앱 형성
* 2.앱 관련 세팅
* 3.공통 미들웨어 넣기
* 4.라우터 넣기(범위가 넓은 와일드 카드는 뒤로)
* 5.에러 미들웨어 넣기
* */





app.set('port',process.env.PORT||3000);

//정확히는 함수가 미들웨어.
//use든 get이든 post든 모두 미들웨어가 장착된 형태임



//모든 코드에서 실행됨. == 서버에 요청을 보낼때마다. 모든 라우터(메서드와 주소 존재)에 실행됨.
//next라는 매개변수와 next()가 없으면 다음것으로 넘어가지 않음.
//middle way는 use 함수가 아니라 (req,res,next)=>{}가 미들웨어임
//함수 앞에 주소를 부여해준다면 특정 주소에서만 미들웨어가 실행됨
app.use((req,res,next)=>{
    console.log('running all request!');
    next();
});

//next는 다음 미들웨어가 실행되도록함. 그러므로 순서가 중요함
//요청에 해당하는 주소가 일치하지 않으면 밑으로 쭉 실행되지 않다가 일치하는 경로를 만날때 실행됨.
//about에 해당하는 주소는 밑에 있는 '/'에 해당하는 get과 post를 실행하지 않고 '/about'이 실행됨

/*
app.use((req,res,next)=> {
    console.log('running all request!');
    next();
},(req,res,next)=> {
    console.log('running all request!');
    next();
},(req,res,next)=> {
    console.log('running all request!');
    next();
},(req,res,next)=> {
    console.log('running all request!');
    next();
});
*/
//이런식으로 미들웨어를 여러개 장착이 가능함.

//한 라우터에서 여러개의 response을 보내면 안됨. 요청한번에 응답 한번이여야함. 그렇지 않으면 에러남.
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/category/javascript',(req,res)=>{
    res.send('hello javascript');
});

//와일드 카드는 그 주소에 어떤 것이든 포용함.
//예를 들어서 category 다음에 node를 쓰던 main을 쓰던 모두 다 허용해줌
//코드는 항상 위에서 아래로 순차적으로 진행되기에 만일 와일드 카드가 위에 있다면 와일드 카드에 해당하지 않는 영역은 무시되기에 와일드 카드는 밑으로 내려가야함.
app.get('/category/:name',(req,res)=>{
    res.send(`hello wildCard`);
});

app.get('/about',(req,res)=>{
    res.send('hello about');
    res.send('hello about');
});

//받는 요청의 범위가 커질수록 맨 하단부로 내려가게 해야함.
/*
app.get('*',(req,res)=>{
    res.send('hello world!');
})
*/
app.use((req,res,next)=>{
    res.status(200).send('This is 404 error');
    //실제로는 404에러라도 200이라고 바꿀 수가 있음
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.send('Error 발생');
    //에러 미들웨어에서 next는 무조건 필수임.
    //그 이유는 매개변수의 갯수가 달라서 다른 함수로 취급하기 때문임
});

app.listen(app.get('port'),()=>{
    console.log('Running express server')
});
