const mongoose = require("mongoose");

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: { type: String },
    image: [String],
  },
  { timestamps: true }
);

const Products = mongoose.model("multerTest", productSchema);

module.exports = Products;
