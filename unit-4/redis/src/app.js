const express = require('express');
const productController = require('./controllers/products.controller');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/products',productController);

module.exports=app;