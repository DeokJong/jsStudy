require('./var');//변수는 사용하지 않고 실행만 할때

console.log(require);
//require 에서 main이 무엇을 실행하는지 알 수 있다.
//requrie 에서 cache는 읽었던 파일을 저장하는 역하을 한다
//cache에서 함수를 빠르게 불러 올 수 있다.
//cache를 직접 조작해서 초기화 가능하다.
