/*
* 打印指定文件目录
* */
let fs = require('fs');
function logFile(path,size){
    let files = fs.readdirSync(path);
    if (files.length > 0) {
        files.forEach(function (arr, key, arrlist) {
            var dirName = path + "/" + arr;
            var dir =fs.statSync(dirName);
            if (dir.isDirectory()) {
                console.log("["+size + arr+"]");
                logFile(dirName,size+"-");
            } else {
                console.log(size + arr);
            }
        })
    }
}
logFile('E:\\node\\zhihu-news\\nodejs',"-")













