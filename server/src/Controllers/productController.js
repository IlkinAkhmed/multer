const Products = require("../Models/productModel");

exports.createProduct = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files were uploaded' });
    }

    const fileData = req.files.map((file) => {
      return {
        title: req.body.title,
        filename: file.filename,
        originalName: file.originalname,
        filePath: file.path
      };
    });

    const savedFiles = await File.create(fileData);
    res.status(200).json({ message: 'Files uploaded and saved to database', files: savedFiles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload and save files' });
  }
}

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
