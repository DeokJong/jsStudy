/*
변수 선언에 관한 예약어는 const와 let이다.

let은 메모리의 위치값을 변환시킬 수 있다.
const는 메모리의 위치를 변환시킬 수 없다.

const는 메모리의 위치는 변화시킬 수 없지만, 해당 메모리 위치에 저장된 값은 바꿀 수 있다.
그리하여 객체 내부의 값을 변화 시킬 수 있다.

*/


const odd = '홀수입니다';
const even = '짝수입니다';

/*
module.exports = { // 객체 방식
    odd, // odd: odd, 객체 방식
    even, // even: even 객체 방식
}
*/


exports.odd =odd;
exports.even =even;

/*

module.export === exports === {//빈 객체}
module.export={
    odd,
    even,
}
객체가 담기는 방식

그러나 함수의 경우에는
module.exports !== exports ==={}
module.exports = functionName;

그러므로 객체 하나만 내보낼려면
module.exports = //채우기

여러개를 내보내고 싶으면
exports.pro1=pro1
exports.pro2=pro2

 */
