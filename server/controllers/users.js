//Users Controller

const db = require('../models');
const createJWT = require('./helpers');

//Index - GET 

const index = async (req, res) => {
  const users = await db.User.find({});
  console.log(users);
  res.json(users);
};

const create = (req,res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) return console.log("Error in User#create:",err);

    const token = createJwt(savedUser);
    return res.status(201).json({
      message: "Success",
      data: { token },
    });
  });
};

module.exports = { index, create };