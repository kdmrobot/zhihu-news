/**
 * Created by wb.huanghuaqing on 2017/2/20.
 */
var MongoClient = require('mongodb').MongoClient;
//连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/blogYuan';
var async = require("async");
/*新增操作*/
var insertData = function(db,datas) {
    //获得指定的集合
    var collection = db.collection('blogYuanDate');
    //插入数据
    var data = [{_id:444,"name":'黄黄黄',"age":21},{_id:123,"name":'花花阿虎去',"age":22}];
    async.each(data, function(item, callback) {
        collection.insert(item, function(err, result) {
            if(err){
                callback(err);
                console.log(err);
            }
            console.log(result);
            callback();
        });
    }, function(err) {
        // 所有SQL执行完成后回调
        if(err) {
            console.log(err);
        } else {
            console.log("SQL全部执行成功");
        }
        db.close();
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    //执行插入数据操作，调用自定义方法
    insertData(db);
});
