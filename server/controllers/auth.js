const db = require('../models');
const bcrpyt = require('bcrypt');
const createJWT = require("./helpers");

const login = async (req, res) => {
  console.log(req.body);

  //look for user via email
  let foundUser = await db.User.find({ 'Email': req.body.Email });
  console.log(foundUser);

  // If we dont find anyone, send 404.

  /* We'll comment out the code below until we get a good
  solution going */

  if(foundUser.length === 0) {
    console.log('no user');
    return res.send({
      message: "Login Error, Please Try Again",
      correct: false,
    });
  } else {
    //does password match?
    bcrpyt.compare(req.body.Password, foundUser[0].Password, function (err,result) {
      console.log("This is the results:", result);
      if (err) {
        return res.send({
          message: "Login Error, Please Try Again",
          correct: false,
          data: err,
        });
      } else {
        if (result) {
          console.log("Congrats password was correct");
          const token = createJWT(foundUser);
          return res.send({
            message: "Success", 
            correct: true,
            data: { token },
          });
        } else {
          console.log("Bad Pass");
          return res.send({
            message: "Login Error, please try again",
            correct: false,
          });
        }
      }
    });
  }
};

module.exports = { login };