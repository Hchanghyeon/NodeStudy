const fs = require('fs');


const data = [];


// 체이닝 가능
fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 64 kbytes
    // encoding: 'utf-8',

}).on('data',chunk => {
    data.push(chunk);
    console.count('data');
}).on('end',()=> {
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
})

// 처음 데이터만 가져오기
.once('data', (chunk) => {
    console.log(chunk);
})



