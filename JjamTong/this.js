/* this는 전역객체이다. */

console.log(this); //전역 스코프에서만 this는 빈객체이다.

function a(){
    console.log(this === global);
}

a();
