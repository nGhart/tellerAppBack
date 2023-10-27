const router = require("express").Router();
const { newTransaction } = require("../controllers/transaction");

router.post("/", newTransaction);

module.exports = router;
