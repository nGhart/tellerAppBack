const mongoose = require("mongoose");

const accountOwner = mongoose.Schema({
  name: { type: String, required: true },
  accNumber: {
    type: String,
    unique: true,
    required: true,
  },
  email: { type: String },
  password: { type: String },
  balance: {
    type: Number,
    default: 0,
  },
});

const OwnerModel = mongoose.model("Owner", accountOwner);
module.exports = OwnerModel;
