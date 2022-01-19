const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders!')
    .catch(console.error);


// 동일한 파일에 writeFile을 쓰는경우 데이터 덮어씌워짐 
fs.writeFile('./file.txt', 'Yo, Dream Coders!')
    .catch(console.error);

// 추가 하고 싶을땐 appendFile을 이용해야함
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :)')
    .catch(console.error);

// copy
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :)')
    .then(()=>{
        fs.copyFile('./file.txt', './file2.txt')
        .catch(console.error);
    })
    .catch(console.error);

// folder
fs.mkdir('sub-folder')
    .catch(console.error);

fs.readdir('./') //
    .then(console.log)
    .catch(console.error);

