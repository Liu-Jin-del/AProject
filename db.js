
//创建数据库，插入集合
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/xscms';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("xscms");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建site集合!");
         });
    dbase.createCollection('users', function (err, res) {
        if (err) throw err;
        console.log("创建users集合!");
       });
       dbase.createCollection('tusers', function (err, res) {
        if (err) throw err;
        console.log("创建tusers集合!");
        db.close();
    });
});


 MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
     if (err) throw err;
     var dbo = db.db("xscms");
     var myobj = { tuser: "刘津" ,tpassword :"123" ,tage: "18", tsex: "女",tplace:"洛阳"};
     dbo.collection("tusers").insertOne(myobj, function(err, res) {
         if (err) throw err;
         console.log("文档插入成功");
         db.close();
     });
 });






 







