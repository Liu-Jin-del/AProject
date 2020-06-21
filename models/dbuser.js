var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 



//处理登录逻辑
 function login(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var user=data.user;
        var psd=data.password
        dbo.collection("users").findOne({user:user},function (err,result) {
            console.log(result);
            if (result.length==0){
                console.log("此用户不存在");
                callback("0");                 
          } else if(result.password !== psd){
            callback("-1"); 
            console.log("密码不正确");
        } else if (result.password === psd){
            callback("1"); 
            console.log("登录成功");
            db.close();
        }
     });
    });
 }
 
 
 
/*
function login(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var user=data.user;
        var password=data.password
        dbo.collection("users").findOne({user:user,password:password},function (err,result) {
            console.log(result);
            if (result==null){
                console.log("此用户不存在");
                callback("0");                 
          } else {
            callback("1"); 
            console.log("登陆成功");
        } 
     });
    });
 }
 */







// 存储一个用户信息
function saveuser(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("users").insertOne(data, function(err, res) {
            if (err){
                console.log("插入用户失败了~");
                callback("-1"); 
            };
            callback("1"); 
            console.log("插入用户成功");
            db.close();
        });
    });
}




exports.saveuser = saveuser;// 导出
exports.login = login;// 导出



