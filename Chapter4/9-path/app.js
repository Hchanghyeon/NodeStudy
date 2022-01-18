const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name
const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__filename));  // 절대 경로
console.log('isAbsolute?', path.isAbsolute('../')); // 상대 경로

// normalize
console.log(path.normalize('./folder////sub')); // 이상한 경로 알아서 잡아줌

// join
console.log(__dirname + path.sep + 'image'); // 이것도 가능
console.log(path.join(__dirname,'image')); // join을 이용하면 더 편하게 설정 가능함.