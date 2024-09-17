const bcrypt = require("bcrypt")
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const secretKey = process.env.ACCESS_TOKEN_SECRETKEY; 




exports.renderLoginPage = function(req,res) { 
    res.render("login") 
}

exports.loginAuth = async function(req,res){ 
    const email = req.body.email
    const pass = req.body.pass
    try {
        const foundUser = await User.findOne({email: email})
        if (foundUser) { 
            const isMatch = await bcrypt.compare(pass,foundUser.password)
            if (isMatch) { 
                const token = jwt.sign({_id: foundUser._id, email: foundUser.email, firstName: foundUser.firstName}, secretKey, {expiresIn:"1h"})
                res.cookie("token", token);
                
                console.log("User found,Succesful Login !")
                console.log(token)
                return res.redirect("/welcome")
            }
            else {
                res.status(401).send("Incorrect password")
                console.log("check your password")
            }
        }
    else { 
        res.status(401).send("Incorrect email")
        console.log("Check your email")
    }
    } catch(err){ 
        console.log(err)
        res.status(500).send("error")
    }
}
