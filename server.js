const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");

const jwt = require('jsonwebtoken')

require('dotenv').config();



//Middleware 

mongoose.connect(
    "mongodb://127.0.0.1:27017/Userdb"

).then(()=> 
console.log("database succesfully connected")
).catch((err)=> { 
    console.log("Error connecting databse: ",err)
})

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(cookieParser())

//Routes 




const homeRoute = require("./routes/home_route.js");

const login = require("./routes/login.js");

const signup = require("./routes/signup.js");

const welcomeRoute = require("./routes/welcome.js");
const deleteRoute = require("./routes/deleteRoute.js")

const editRoute = require("./routes/edit")






app.use('/', homeRoute);


app.use("/login", login);

app.use("/signup", signup);

app.use('/welcome', welcomeRoute);

app.use("/delete", deleteRoute)
app.use('/edit', editRoute)





app.listen(1234, function(){ 
    console.log("Server is running on port 1234!")
})


