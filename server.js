const app = require("./app");
const mongoose = require("mongoose");

//connect to mongodb using mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/it")
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log(error);
  });

//listening to server

app.listen(8000, () => {
  console.log(`server is running at http://localhost:8000`);
});
