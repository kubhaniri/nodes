const express = require('express');
const productsController = require('../../controllers/V1/products-controller');

const router = express.Router();

router.post('/create', productsController.createProduct);

module.exports = router;
