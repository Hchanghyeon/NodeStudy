console.log('code1');
console.time('timeout 0');
setTimeout(()=> {
    console.timeEnd('timeout 0');
    console.log('setTimout 0');
},0) ;

console.log('code2');
// setTimeout과 비슷하게 동작함
setImmediate(()=>{
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(()=> {
    console.log('process.nextTick');
})