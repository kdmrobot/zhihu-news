/**
 * Created by wb.huanghuaqing on 2017/2/14.
 */
var async = require('async');
var t = require('./lib');
var log = t.log;
debugger;
//er =async.apply(t.inc, [3,4,5]);



async.parallel([//参数 fn args
    async.apply(t.inc, [3,4,5]),
    async.apply(t.fire, 100)
], function (err, results) {
    log('1.1 err: ', err);
    log('1.1 results: ', results);
});

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
    switch (args.length) {
        case 0: return func.call(thisArg);
        case 1: return func.call(thisArg, args[0]);
        case 2: return func.call(thisArg, args[0], args[1]);
        case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
// Lodash rest function without function.toString()
// remappings
function rest(func, start) {
    return overRest$1(func, start, identity);
}
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
//给每个函数添加 拦截处理
//第一层 有自己的参数 包装后 返回一个reset的函数 供_parallel调用（多层类似递归  每一层维护当时的状态）
//第二层 合并第一层参数 执行
function overRest$1(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
            array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
            otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func,this, otherArgs);
    };
}
/*
 * async.apply  ===  overReset$1
 *
 *exports.apply = apply$2;
 * // async.apply(t.inc, [3,4,5]),
 * //执行了2次  一个在apply定义的时候 一个在each中调用的时候
 *
 * var apply$2 = rest(function (fn, args) {
 *                   return rest(function (callArgs) {//task()
 *                          return fn.apply(null, args.concat(callArgs));
 *                   });
 *              });
 *
 * async.apply(t.inc, [3,4,5]),
 * //执行下面的一次  返回给parallel的是 新的 function()
*             fn= function (callArgs) {
*                          return fn.apply(null, args.concat(callArgs));
*              }
*              //在parallel中 each 执行 对应的fn 这个时候 合并定义传进去的参数 和 parallel传的 callback
*              //执行fn 和 吧后续的参数合并 传到fn中
 *
 *overRest$1（ return function(t.inc, [3,4,5])）
 *
 * function (fn, args) {
*                   return rest(function (callArgs) {
*                          return fn.apply(null, args.concat(callArgs));
*                   });
*              }
 *
 */
//控制 函数列表都执行完后执行一次
function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};
    //params:  array  eachcallback  finalcallback
    eachfn(tasks, function (task, key, callback) {//eachFn（eachOf  when  array -->eachOfArrayLike）控制 callback只调用一次
        task(rest(function (err, args) {//这个就是传给 task fn的 参数  这里用rest处理形参  在fn中调用的格式就是如下
            /*  callback(null, n+1);
            * exports.inc = function(n, callback, timeout) {
                 //将参数n自增1之后的结果返回给async
                 timeout = timeout || 200;
                 setTimeout(function() {
                     --> callback(null, n+1);
                     -->          err  ,args
                 }, timeout);
             };
            * */
            if (args.length <= 1) {
                args = args[0];
            }
            results[key] = args;
            callback(err);
        }));
    }, function (err) {
        callback(err, results);
    });
}


// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback ) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err) {
        if (err) {
            callback(err);
        } else if (++completed === length) {//如果长度等于 执行的长度（那么执行回调）， 每次执行 如果没有异常抛出 则++一次
            callback(null);
        }
    }
    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}
