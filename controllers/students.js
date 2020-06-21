let db =require("../models/db")   //拿到model

// showStudentList  是控制器 用来渲染一个学生列表的页面
//调用第一个db里面的getstudents，传递函数function，arr为第一个db.js里面的result

//从数据库里面拿数据，到模板中进行绑定index.ejs在index.js中通过for循环进行渲染
exports.showStudents = (req,res)=>{
    db.getStudents(function(arr){           //arr是从model拿到的数据callback
        res.render("index",{"arr":arr})      //index渲染数据，arr从数据库拿到数据
    })
}


  //渲染一个进入添加课程的页面
exports.add=(req,res)=>{
    res.render("add")
}




// 处理添加课程的逻辑
exports.doAdd = (req,res)=>{
    db.save(req.body,function(info){
        res.send(info)
    })
}


//处理删除学生的页面
exports.delete = (req,res)=>{
     res.render("delete")
    }

//处理删除学生的逻辑
exports.doDelete = (req,res)=>{
    db.deleteone(req.body,function(info){
        res.send(info)
    })
}

//渲染一个进入首页的页面
exports.sy=(req,res)=>{
    res.render("sy")
}

exports.dosy = (req,res)=>{
        db.get(req.body,(arr2) => {
            res.json({"results": arr2})
        })
    }



//处理完善学生信息的逻辑
exports.doAdds = (req,res)=>{
    db.saves(req.body,function(info){
        res.send(info)
    })
}

//  //渲染一个完善学生的页面
//  exports.adds=(req,res)=>{
//     res.render("adds")
// }

//..............................
  //渲染一个进入搜索课程的页面
  exports.index=(req,res)=>{
    res.render("index")
}


// 处理搜索课程的逻辑
exports.doindex = (req,res)=>{
    db.index(req.body,(arr2) => {
        res.json({"results": arr2})
    })
}



