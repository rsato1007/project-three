// Gifs Router
const router = require("express").Router();
const { gifs } = require("../controllers");

router.post("/", gifs.index);

module.exports = router;