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
const student = { name: "ellie", age: 20 };
console.log(student);
console.table(student); // 테이블 형태
console.dir(student);
