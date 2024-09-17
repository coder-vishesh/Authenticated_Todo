exports.logoutController = function(req,res){ 
    const token = req.cookies.token
    res.clearCookie('token')
    res.redirect('/login') 
}