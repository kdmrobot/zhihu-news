/**
 * Created by wb.huanghuaqing on 2017/2/17.
 */
var asy = require("async");
function a(){
    console.log("a")
}
function b(){
    console.log("b")
}
/**
 * eachOf TEST.
 *传入 执行的fn数组  每次执行的函数  最后执行的函数
 *每次执行的函数获取的参数： 当前执行的函数 a ，b执行到数组的下标 ，c回调函数（封装过返回的finalCb）
 *c必须在iterate中调用  返回按node标准返回 callback(err)or callback(null) 不调用则判断当前 数组没有执行完 不会执行finalCalback
 *
 *
 */
function iterate(){
    var er = 0;
    return function(a,b,c) {
        a();
        console.log(b);
        result.push('xxx')
        c(null);
    }
}
function finalCb(err){
   console.log(result);
}
var result =[];
asy.eachOf([a,b],iterate(),finalCb)
//
/* console.log
    a
    0
    b
    final
    1
*/
