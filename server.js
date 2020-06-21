let express = require("express");
var bodyParser = require('body-parser')
let path = require('path'); //系统路径模块
let students = require("./controllers/students")
let users = require("./controllers/users")
let app = express();

//一旦使用模板引擎，只需要写views下面的模板就可以了，模板是视图
//app.set("view engine","ejs")等于下面静态托管



//express静态托管资源
app.use(express.static(path.join(__dirname, 'public')));



// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 通过req.body得到客户端传递过来的数据

app.set("view engine","ejs")

// 显示学生列表
app.get("/allStudent",students.showStudents)

// 显示添加学生表单
app.get("/add",students.add)

// 处理添加学生的逻辑
app.post("/add",students.doAdd)


//处理删除学生的页面
app.get("/delete",students.delete)

//处理删除学生的逻辑
app.post("/delete",students.doDelete)

//.................................................
// //处理完善学生的页面
// app.get("/adds",students.adds)
//处理完善信息的逻辑
app.post("/adds",students.doAdds)
//......................................................
//显示登录界面
app.get("/login",users.login)

//处理用户登录的逻辑
app.post("/login",users.doLogin)

//显示注册界面
app.get("/register",users.register)

//处理用户注册的逻辑
app.post("/register",users.doRegister)

//处理显示登录成功后的首页的页面
app.get("/sy",students.sy)
//
app.post("/sy",students.dosy)

// 显示查询学生表单
app.get("/index",students.index)

// 处理查询学生的逻辑
app.post("/index",students.doindex)


app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})




