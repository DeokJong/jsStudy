const buffer = Buffer.from('나를 버퍼로 바꿔라')

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('띄엄 '),Buffer.from('띄엄 '),Buffer.from('띄워쓰기')];

console.log(Buffer.concat(array).toString());

//사이즈가 5인 빈 버퍼 생성
console.log(Buffer.alloc(5));
