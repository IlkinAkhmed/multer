const mongoose = require("mongoose");

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Products = mongoose.model("multerTest", productSchema);

module.exports = Products;
