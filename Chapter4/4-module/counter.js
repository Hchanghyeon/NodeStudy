
let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
} 

// Node 문법
module.exports.getCount = getCount;
module.exports.increase = increase;