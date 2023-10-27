const mongoose = require("mongoose");

const tellerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      // enum : ['admin', 'user'],
    },
  },
  { timestamps: true }
);

const tellerModel = mongoose.model("teller", tellerSchema);
module.exports = tellerModel;
