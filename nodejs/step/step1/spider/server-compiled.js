/**
 * Created by wb.huanghuaqing on 2017/2/13.
 */
let http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
db = require('./db.js');

let utils = require('./utils');
let personInfo = utils.getPersonInfo;
let isRepeat = utils.isRepeat;
let fs = require('fs');
let ep = new eventproxy();

let catchFirstUrl = 'http://www.cnblogs.com/',
    //入口页面
deleteRepeat = {},
    //去重哈希数组
urlsArray = [],
    //存放爬取网址
catchDate = [],
    //存放爬取数据
pageUrls = [],
    //存放收集文章页面网站
pageNum = 2; //要爬取文章的页数
console.log("read server");
for (let i = 1; i <= pageNum; i++) {
    pageUrls.push(`${ catchFirstUrl }?CategoryId=808&CategoryType=%22SiteHome%22&ItemListActionName=%22PostList%22&PageIndex=${ i }&ParentCategoryId=0`);
}

//环环相扣
//1. 遍历多个文章目录页，异步抓取每个文章目录页中所有文章的url
//2. 当所有文章的url都抓取完毕后开始一次对5个文章url进行异步抓取
//3. 在对每个文章url抓取后将需要的数据放到全局的数组中存储


/**
 * 处理单个文章url，拿到用户信息后，传入callback来向最后的执行程序返回信息
 * @param url
 * @param callback
 */
let singleUrlProcess = function (url, callback) {
    //收集数据
    //1、收集用户个人信息，昵称、园龄、粉丝、关注
    let currentBlogApp = url.split('/p/')[0].split('/')[3];
    let flag = isRepeat(deleteRepeat, currentBlogApp);

    if (!flag) {
        let appUrl = `http://www.cnblogs.com/mvc/blog/news.aspx?blogApp=${ currentBlogApp }`;
        personInfo(appUrl, function (info) {
            //返回数据后执行添加数据
            catchDate.push(info);
            //此处必须调用callback，来确保personInfo的回调被正常执行，否则不会等待personInfo的异步请求完成
            callback(null, info);
        });
    } else {
        callback(null, null);
    }
};
/**
 * 异步处理全部url，组合好数据后将其作为参数传入callback并执行
 * @param articleUrls
 * @param callback
 */
function asyncProcessUrls(articleUrls, callback) {
    // 使用async控制异步抓取，避免卡死
    // mapLimit(arr, limit, iterator, [callback])
    // 异步回调
    async.mapLimit(articleUrls, 5, function (url, callback) {
        singleUrlProcess(url, callback);
    }, function (err, results) {
        //results是reptileMove 执行callback返回的

        let len = 0,
            aveAge = 0,
            aveFans = 0,
            aveFocus = 0,
            eachDateJson,
            eachDateJsonFans,
            eachDateJsonFocus;

        //处理总数据
        catchDate = results.filter(function (item) {
            return item !== null;
        });

        len = catchDate.length;

        for (let i = 0; i < len; i++) {
            eachDateJson = catchDate[i];
            // 小几率取不到值则赋默认值
            eachDateJsonFans = eachDateJson.fans || 110;
            eachDateJsonFocus = eachDateJson.focus || 11;

            aveAge += parseInt(eachDateJson.age);
            aveFans += parseInt(eachDateJsonFans);
            aveFocus += parseInt(eachDateJsonFocus);
        }

        let sendData = JSON.stringify({
            pageNum: pageNum * 20,
            authorNum: len,
            aveAge: Math.round(aveAge / len),
            aveFans: Math.round(aveFans / len),
            aveFocus: Math.round(aveFocus / len)
        });

        callback(sendData);
    });
}

/**
 * 拿到所有文章url, 并触发BlogArticleHtml事件
 * @param pageUrls
 */
function getAllUrls(pageUrls) {
    pageUrls.forEach(function (pageUrl) {
        superagent.get(pageUrl).end(function (err, pres) {
            // 常规的错误处理

            if (err) {
                console.log(err);
            }
            // pres.text 里面存储着请求返回的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            let $ = cheerio.load(pres.text);
            let curPageUrls = $('.titlelnk');
            for (let i = 0; i < curPageUrls.length; i++) {
                let articleUrl = curPageUrls.eq(i).attr('href');
                urlsArray.push(articleUrl);
                // 相当于一个计数器
                ep.emit('BlogArticleHtml', articleUrl);
            }
        });
    });
}

// 主start程序
function start() {
    function onRequest(req, res) {
        //设置服务器的cors，解决跨域问题
        console.log("设置服务器的cors，解决跨域问题");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        // 设置字符编码(去掉中文会乱码)
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        console.log(req.url);
        if (req.url == '/') {
            getAllUrls(pageUrls);
            //确认拿到全部文章url后，执行回调
            ep.after('BlogArticleHtml', pageUrls.length * 20, function (articleUrls) {
                asyncProcessUrls(articleUrls, function (data) {
                    res.end(data);
                    db.db.setDb(catchDate);
                });
            });
        } else {
            res.end("");
        }
    }
    console.log(http.createServer);
    http.createServer(onRequest).listen(3000);
}

exports.start = start;

//# sourceMappingURL=server-compiled.js.map