const jwt = require('jsonwebtoken');

//add the secret 

const SECRET = process.env.SECRET;

function createJWT(user) {
  return jwt.sign(
    { user }, //data payload
    SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = createJWT;