const productModel = require('../../mongo/models/products');

const createProduct = async (req, res) => {
  try {
    const { title, description, price, images, userId } = req.body;
    const product = await productModel.create({
      title,
      description,
      price,
      images,
      user: userId
    });
    res.send({ status: 'OK', data: product });
  } catch (error) {
    console.log('Product creation error: ', error);
    res.status(500).send({ status: 'ERROR', data: error.message });
  }
};

const deleteProduct = (req, res) => {};

const updateProduct = (req, res) => {};

const getProducts = (req, res) => {};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct
};
