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

const getProducts = async (req, res) => {
  try {
    const allProduct = await productModel.find({
      price: { $lt: 10 }
    }).select('title description price').populate('user','username email data role');
    res.send({ status: 'OK', data: allProduct });
  } catch (error) {
    console.log('Getting all product fails: ', error);
    res.status(500).send({ status: 'ERROR', data: error.message });
  }
};

const getProductsByUser = async (req, res) => {
  try {
    const allProduct = await productModel.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: allProduct });
  } catch (error) {
    console.log('Getting all product fails: ', error);
    res.status(500).send({ status: 'ERROR', data: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProductsByUser
};
