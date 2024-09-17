const mongoose = require("mongoose")
const User = require("./userModel")

const userTodoSchema = new mongoose.Schema( { 
    userId : { 
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        reqiured: true

    },
    task: String
})

const Todo = mongoose.model("Todo", userTodoSchema);

module.exports = Todo;