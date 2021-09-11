const db = require('../models');
const bcrpyt = require('bcrypt');
const createJWT = require("./helpers");

const login = async (req,res) => {

  //look for user via username
  let foundUser = await db.User.findOne({ Name: req.body.Name });
  console.log(foundUser);
  //if we dont find anyone, send 404.

  if(!foundUser) {
    console.log('no user found');
    return res.send({
      message: "Login Error, Please Try Again",
      correct: false,
    });
  } else {
    console.log("user");
    //does password match?
    bcrpyt.compare(req.body.Password, foundUser.password, function (err,result) {
      if (err) {
        return res.send({
          message: "Login Error, Please Try Again",
          correct: false,
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