const router = require('express').Router();
const { users } = require("../controllers");


router.get("/", users.index);
router.post("/", users.create);
router.use(require("../config/auth"));

module.exports = router;