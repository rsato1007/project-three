const router = require("express").Router();

// router.use(require("../config/auth"));
router.use("/posts", require("./posts"));
router.use("/users", require('./users'));
router.use("/gifs", require("./gifs"));
router.use("/auth", require("./auth"));

module.exports = router;