const router = require("express").Router();
const { addTeller } = require("../controllers/tellerController");

router.post("/", addTeller);

module.exports = router;
