const express = require('express');

const app = express();

const productRoutes = require('./routes/produtRoutes');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Shopease API!');
});


module.exports = app;