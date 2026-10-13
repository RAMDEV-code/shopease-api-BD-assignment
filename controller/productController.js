const products = require('../models/productModel.js');

const getAllProducts = (req, res) => {
  // res.send('All products are retrieved successfully');
  // res.json(products);
  // res.status(200).json(products);
  const manufacturer = req.query.manufacturer;
  const size = req.query.size;
  
    const filteredProducts = products.filter(product => {
      const matchesManufacturer = !manufacturer || product.manufacturer === manufacturer;
      const matchesSize = !size || product.size === Number(size);
      return matchesManufacturer && matchesSize;
    });
  
  res.json(filteredProducts);
  
};


module.exports = {
  getAllProducts,
};