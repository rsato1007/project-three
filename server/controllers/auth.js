const db = require('../models');
const bcrpyt = require('bcrypt');
const createJWT = require("./helpers");

const login = async (req,res) => {
  console.log('login controller');
  const { email, password } = req.body;

  //look for user via email

  let foundUser = await db.User.findOne({ email });

  //if we dont find anyone, send 404.

  if(!foundUser) {
    console.log('no user');
    return res.send({
      message: "Login Error, Please Try Again",
    });
  } else {
    console.log("user");
    //does password match?
    bcrpyt.compare(password, foundUser.password, function (err,result) {
      if (err) {
        return res.send({
          message: "Login Error, Please Try Again",
          data: err,
        });
      } else {
        if (result) {
          const token = createJWT(foundUser);
          return res.send({
            message: "Success", 
            data: { token },
          });
        } else {
          console.log("Bad Pass");
          return res.send({
            message: "Login Error, please try again",
          });
        }
      }
    });
  }
};

module.exports = { login };