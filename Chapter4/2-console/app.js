console.log("logging.....");
console.clear();

// console에도 많은 메소드가 있음

// log Level
console.log("log"); // 개발
console.info("info"); // 중요한 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// warn, error 레벨별로 서버에 로그 저장도 할 수 있음
// 구분해서 심각한 문제인지 구별할 수 있음

// assert
// 틀린 것만 출력
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same!");

// print object
const student = { name: "ellie", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student); // 테이블 형태
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
// 시간 체크
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function"); // 초기화
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
