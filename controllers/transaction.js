const transaction = require("../models/transactionModel");

const newTranasction = async (req, res) => {
  const data = req.body;
  try {
    let newTranaction = await transaction.create(data);
    if (!newTranaction) {
      return res.status(401).json({ success: false });
    }
    res.json(newTranaction);
  } catch (err) {
    res.status(500).send({ message: "Error in saving the transaction" });
  }
};

module.exports = {
  newTranasction,
};
