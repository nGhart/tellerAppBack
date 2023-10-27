const tellerModel = require("../models/tellerModel");

// ADDING TELLER
const addTeller = async (req, res) => {
  let data = req.body;
  try {
    let newTeller = await tellerModel.create(data);
    if (!newTeller) {
      return res.json("Teller Not created");
    }
    res.json(newTeller);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = {
  addTeller,
};
