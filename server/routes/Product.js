
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router
.get('/getProducts', async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.send(products);
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

.post('/addProduct', async (req, res) => {
  try {
    await Product.addProduct(req.body);
    res.send({success: true});
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

.put('/editProduct', async (req, res) => {
  try {
    await Product.editProduct(req.body);
    res.send({success: true});
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

.delete('/deleteProduct/:productID', async (req, res) => {
  try {
    await Product.deleteProduct(req.params.productID);
    res.send({success: true});
  } catch(err) {
    res.status(500).send({message: err.message});
  }
});

module.exports = router;
