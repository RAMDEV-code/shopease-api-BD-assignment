const products = require('../models/productModel.js');


const getAllProducts = (req, res) => {
  // res.send('All products are retrieved successfully');
  // res.json(products);
  // res.status(200).json(products);
  
  res.json(products);
};



module.exports = {
  getAllProducts,
};