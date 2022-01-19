const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 프로세스에 대한 정보를 받아올 수 있음

// 비동기 처리이기 때문에 태스크 큐에 들어가 일반 동기가 다 처리 될 때까지 기다렸다가 실행됨
setTimeout(()=> {
console.log('setTimeout');
},0);

// 비동기 처리도 순서대로 처리되나 nextTick을 이용하면 태스크 큐안에서 제일 앞부분으로 이동하여 처리된다.
process.nextTick(() => {
    console.log('nextTick');
})

for(let i = 0; i < 100; i++){
    console.log('for loop');
}