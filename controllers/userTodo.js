 const Todo = require("../models/todoModel")
 const jwt = require("jsonwebtoken");

exports.userTodo = async function(req,res) { 
    const todoTask = req.body.task;
    const token = req.cookies.token;
    if(!token) res.Status(401).send("anauthorised")
    try { 
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY); 
        const userId = decoded._id;

        const todo = new Todo({ 
            userId : userId, 
            task : todoTask
        })
        await todo.save()
        res.redirect("/welcome") 
        console.log("task has been succesfully saved in db")

        
      }catch(err) { 
        res.status(401).send("error while save the task")
      }
   

}

exports.getAllTodos = async function(req,res) { 
  const token = req.cookies.token; 
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY)
  const tasks = await Todo.find({userId: decoded._id})
  res.render('welcome',{tasks : tasks})

}

