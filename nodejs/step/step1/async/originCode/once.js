/**
 * Created by wb.huanghuaqing on 2017/2/17.
 */
function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}