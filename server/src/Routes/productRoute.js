const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
} = require("../Controllers/productController");
const { upload } = require("../middleware/productUpload");

router.post("/", upload.array("files",5), createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
module.exports = router;
