var asy = require('async');
//定义形参 如果传入的 参数比定义的多  那么最后一个为数组  少则 前面少的为null  数组length 0
function test(a,b,c,d,e){
    console.log("result:--"+a+b+c+d+e.length)
}
var er = asy.rest(test);
//er(1,2,3,4,5,6,7,8)
//er(1,2,3,4,5)
er(1,2,3)
