const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL =
  "mongodb+srv://ondg:ondg@cluster0.8rlvalv.mongodb.net/bankteller?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((d) => {
    console.log("connected to DB");
  });

const ownerRoutes = require("./router/ownerRoutes");
const tellerRoutes = require("./router/tellerRoute");
// const transactionRoute = require("./router/transactionRoute");

//ROUTES FOR ACCOUNT OWNER [CREATE,DEPOSIT,WITHDRAW]
app.use("/owner", ownerRoutes);
// ROUTE FOR TELLER [ADD TELLER]
app.use("/teller", tellerRoutes);
// ROUTE TO INPUT TRANSACTOPM
// app.use('/transaction',transactionRoute)

app.listen(4000, () => {
  console.log("Running of port 4000");
});
