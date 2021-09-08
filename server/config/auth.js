const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
  // Check for the token being sent 
  let token = req.get('Authorization') || req.query.token || req.body.token;

  console.log("Auth header from Auth Middleware: " , token);
  if(token) {
    //remove the 'bearer' if it was included in the token header
    token = token.replace('Bearer ', "");
    //check if token is valid and not expired
    jwt.verify(token, SECRET, function(err, decoded) {
      if(err) {
        console.log("JWT VERIFY ERORR: " , err);
        next(err);
      } else {
        // if its valid
        console.log("DECODE SUCCESSFUL: ", decoded.user);
        req.user = decoded.user;
        next();
      }
    });
  } else {
    next();
  }
}