const express = require('express');
const router = express.Router();

const { getAllProducts } = require('../controller/productController');

// Define your product routes here
router.get('/', getAllProducts);



module.exports = router;