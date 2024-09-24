const express = require("express");
const {
  createUser,
  deleteByReg,
  updateUserByReg,
  readByReg,
  readAllusers,
} = require("./routes");
const app = express();

app.use(express.json());

app.post("/createuser", createUser);

app.get("/getallusers", readAllusers);

app.get("/getuser/:reg", readByReg);

app.put("/updateuser/:reg", updateUserByReg);

app.delete("/deleteuser/:reg", deleteByReg);

module.exports = app;
