const Products = require("../Models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const files =req.files;
    files.forEach((x) => {
        const imagePath = ``

    })
    const newProduct = new Products({
      name: req.body.name,
      image: files,
    });
    await newProduct.save();
    res.status(201).send("Product Created");
  } catch (error) {
    res.status(500).send("Internal server Error!!!");
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Internal server Error!!!");
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      res.send(product);
    } else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).send("Internal server Error!!!");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (product) {
      res.send("product deleted");
    } else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).send("Internal server Error!!!");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body);
    if (product) {
      res.status(202).json(product);
    } else res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).send("Internal server Error!!!");
  }
};
