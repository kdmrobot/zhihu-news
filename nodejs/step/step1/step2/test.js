/*fs.readFile('../index.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("read:" + data.toString())
})*/
/*fs.stat("../index.txt",function(err ,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
})*/
/*let buf = new Buffer(1024);
fs.open("../index.txt",'r+',function(err ,fd){
    if(err){
        return consolo.log(err);
    }
    fs.read(fd,buf,0,buf.length,0,function(err ,bytes){
        if(err) console.log(err);
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
        fs.close(fd,function(err ){
            if(err) {
                console.log(err);
            }else{
                console.log('sucess');
            }
        })
    })
})*/

/*fs.mkdir('../hhq',function(err){
    if(err){
        console.log(err);
    }else{

    }
})*/
let fs = require('fs');
function logFile(path,size){
    debugger;
   /* fs.readdir(path,function(err,files){
        if(err){
            console.warn(err);
        }else {
            if (files.length > 0) {
                files.forEach(function (arr, key, arrlist) {
                    var dirName = path + "/" + arr;
                    fs.stat(dirName,function(err ,stats) {
                        if (stats.isDirectory()) {
                            console.log(arr);
                            logFile(dirName);
                        } else {
                            console.log(arr);
                        }
                    })
                })
            }
        }
    });*/
    let files = fs.readdirSync(path);
    if (files.length > 0) {
        files.forEach(function (arr, key, arrlist) {
            var dirName = path + "/" + arr;
            fs.stat(dirName,function(err ,stats) {
                if (stats.isDirectory()) {
                    console.log(size + arr);
                    logFile(dirName,size+"-");
                } else {
                    console.log(size + arr);
                }
            })
        })
    }
}
logFile('E:\\node\\zhihu-news\\nodejs',"-")













