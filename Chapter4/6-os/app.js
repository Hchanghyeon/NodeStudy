const os = require('os');


// Mac
console.log(os.EOL === '\n');
// Window
console.log(os.EOL === '\r\n');

console.log(os.tmpdir());

// 컴퓨터에 관련된 정보들을 가지고 올 수 있음