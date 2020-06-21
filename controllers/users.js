let dbuser =require("../models/dbuser")   //拿到model
//渲染登录界面
exports.login=(req,res)=>{
    res.render("login")
}
//渲染登录的逻辑
  exports.doLogin = (req,res)=>{
    dbuser.login(req.body,function(info){
        res.send(info)

    })
}



//渲染注册界面
exports.register=(req,res)=>{
    res.render("register")
}
//渲染注册的逻辑
exports.doRegister = (req,res)=>{
    dbuser.saveuser(req.body,function(info){
        res.send(info)
    })
}

