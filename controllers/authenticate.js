const jwt = require("jsonwebtoken")


exports.authenticate = function(req, res, next) {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);  // No token, unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY, (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");  // Token is invalid or expired
        }
        req.user = decoded;  // Store decoded token payload in request for use in the next middleware or route handler
        next();  // Move to the next middleware/route
    });
};

