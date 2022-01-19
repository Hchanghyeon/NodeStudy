// 클래스 외부에서 쓰이는 함수의 this는 global을 가르킴
function hello() {
    console.log(this);
    console.log(this === global);
}

hello();


// class의 this는 자기자신을 가르킴
class A{
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('------ class ---------');
        console.log(this);
        console.log(this === global);
    }
}


const a = new A(1);
a.memberFunction();

console.log('---global scope---');
console.log(this);
console.log(this === module.exports);