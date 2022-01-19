const fs = require('fs');

// 3
// rename(..., callback(error, data))
// try { renameSync(....) } catch(e) {}
// promises.rename().then().catch(0)


// 동기 수행이기 때문에 가급적 사용을 하지않는게 좋으며 try, catch문을 이용해야 서버가 중단되지 않음
try {
    fs.renameSync('./text.txt','./text-new.txt');
} catch(error){
    console.error(error);
}
console.log('hello');


// 비동기적 방법
fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
})

console.log('hello');

// 위의 ./text.txt파일을 아래에서 promises로 바꾸려고해도 taskQueue안에서 어떤 순서로 실행될지 모르기 때문에
// 에러가 발생함.
fs.promises
    .rename('./text2.txt','./text-new.txt')
    .then(() => console.log('done'))
    .catch(console.error);