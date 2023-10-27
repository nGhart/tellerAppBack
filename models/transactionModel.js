const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    accountNumber: {
      type: String,
    },
    transactionType: {
      type: String,
    },
    amount: {
      type: Number,
    },
    success: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction;
