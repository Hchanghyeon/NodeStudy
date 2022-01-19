// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');

// 그냥 접근시 유니코드의 형태로 출력됨
console.log(buf);
console.log(buf.length);

// 배열로 접근시 아스키코드로 접근
console.log(buf[0]);
console.log(buf[1]);
// toString의 기본 매개변수는 utf-8이며 다른 것으로 바꿀 수도 있음
console.log(buf.toString('utf-8'));

// create
// 버퍼를 메모리상에 초기화해서 2개를 만듦
const buf2 = Buffer.alloc(2);
// 버퍼를 메모리상에 초기화 하지 않고 2개를 만듦 안에 값이 들어있을 수 있음 / 빠른게 장점
const buf3 = Buffer.allocUnsafe(2);

console.log(buf2);
console.log(buf3);

// 아스키 코드 넣어주기
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());

// 복사
buf2.copy(buf3);
console.log(buf3.toString());

// concat (합치기)
const newBuf = Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());