const fs = require('fs').promises;
const path = require('path');


let fileList = [];
const folderList = ['video','captured','duplicated'];

folderList.forEach((value, index) => {
    folderList[index] = '.'+path.sep+value;
})

folderList.forEach(value => {
    fs.readdir('./', 'utf8')
    .then(files => {
        if(files.indexOf(value) === 1){
            fs.mkdir(value)
            .then(console.log('created ' + value + 'folder'))
            .catch(console.error);
        } else {
            console.log(value + " is existed");
        }
    })
   
})

fs.readdir('./', 'utf8')
    .then(files => {
        files.forEach((value) => {
            if(path.extname(value) === '.mp4' || path.extname(value) === '.mov'){
                fs.rename('.'+path.sep+value,folderList[0])
                    .then(console.log(value + ' move to '+ folderList[0] + ' folder'))
                    .catch(console.error);
            } else if(path.extname(value) === '.aae'){
                fs.rename('.'+path.sep+value,folderList[1])
                .then(console.log(value + ' move to '+ folderList[1] + ' folder'))
                .catch(console.error);
            } else if(path.extname(value) === '.jpg'){
                if(value.slice(0,5)[4] === 'E'){
                    fs.rename('.'+path.sep+value,folderList[2])
                    .then(console.log(value + ' move to '+ folderList[2] + ' folder'))
                    .catch(console.error);
                } 
            } 
        });
    })
    .catch(console.error);
