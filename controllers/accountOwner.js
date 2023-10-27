const accoutOwenerModel = require("../models/accountOwners");
const transactionModel = require("../models/transactionModel");

const getOwners = async (req, res) => {
  let owners = await accoutOwenerModel.find({});
  res.json(owners);
};

const addOwner = async (req, res) => {
  try {
    let data = req.body;
    let newOwner = await accoutOwenerModel.create(data);
    if (!newOwner) {
      throw Error("Failed to create owner");
    }
    res.json(newOwner);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

// ADD ADD TO BALANCE
const deposit = async (req, res) => {
  const { accNumber, amount } = req.body;
  try {
    // Convert the amount value to a number
    const amountToAdd = Number(amount);

    // Find the existing business document
    const owner = await accoutOwenerModel.findOne({ accNumber: accNumber });

    if (!owner) {
      return res.json({ msg: "No business found" });
    }

    // Calculate the new balance
    const newBalance = owner.balance + amountToAdd;

    // Update the balance in the database
    const updatedOwner = await accoutOwenerModel.updateOne(
      { accNumber: accNumber },
      { $set: { balance: newBalance } }
    );
    if (updatedOwner) {
      let depostRecord = transactionModel.create({
        accountNumber: accNumber,
        transactionType: "deposit",
        amount: amountToAdd,
        status: "success",
      });
      res.json({
        msg: `Am amount of ${amountToAdd} has been created into your account`,
      });
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

// withdraw
const withdraw = async (req, res) => {
  const { accNumber, amount } = req.body;
  try {
    // Convert the amount value to a number
    const amountToAdd = Number(amount);

    // Find the existing business document
    const owner = await accoutOwenerModel.findOne({ accNumber: accNumber });

    if (!owner) {
      return res.json({ msg: "No business found" });
    }

    // Calculate the new balance
    const newBalance = owner.balance - amountToAdd;

    // Update the balance in the database
    const updatedOwner = await accoutOwenerModel.updateOne(
      { accNumber: accNumber },
      { $set: { balance: newBalance } }
    );
    if (updatedOwner) {
      let depostRecord = transactionModel.create({
        accountNumber: accNumber,
        transactionType: "withdrawal",
        amount: amountToAdd,
        status: "success",
      });
      return res.json({
        msg: `Am amount of ${amountToAdd} has been debited into your account`,
      });
    }
    res.json(updatedOwner);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = {
  deposit,
  getOwners,
  withdraw,
  addOwner,
};
