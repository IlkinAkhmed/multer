const express = require("express");
const mongoose = require("mongoose");
const { upload } = require("./src/middleware/productUpload");
const router = require("./src/Routes/productRoute");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));


app.use("/products", router);

// https://levelup.gitconnected.com/complete-guide-to-upload-multiple-files-in-node-js-using-middleware-3ac78a0693f3

mongoose
  .connect("mongodb+srv://multer:ilkin123@cluster0.ghwwmer.mongodb.net/")
  .catch((error) => console.log("db not connect" + error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
