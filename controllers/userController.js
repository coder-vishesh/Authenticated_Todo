
const bcrypt = require("bcrypt")
const User = require("../models/userModel.js");



exports.renderSingnUPage = (req,res)=> { 
    res.render("signup")
}



exports.createUser = async (req,res)=> { 
    const fName = req.body.fName; 
    const lName = req.body.lName; 
    const email = req.body.email; 
    const pass = req.body.pass;
    console.log(fName,lName,email,pass);

    try {

          const existingEmail = await User.findOne({email : email})
        if (existingEmail){ 
            console.log("email is already registered")
            res.status(500).send("Email is already registered");
        }
        else {
            const hashedPassword = await bcrypt.hash(pass,10);

            const user = new User( { 
                firstName : fName,
                lastName: lName,
                email: email, 
                password: hashedPassword
            });
            await user.save()
            console.log("User data has been succesfully saved in the database");
           
            res.redirect('/login')
        } 
        }catch(err) { 
            console.log(err);
            res.status(500).send("error occured while creating the new user");}
        
        }

       
    
