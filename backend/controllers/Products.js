const asyncHandler = require('express-async-handler');
const Product = require('../Model/Products');
const APIfeatures = require('../Elastic/Elastic');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  try {
    const features = new APIfeatures(Product.find(), req.query)
      .filtering()
      .sorting()
      .paginating();
    const allProducts = await features.query;
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: 'Something wrong!' });
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('user');

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

const createProduct = asyncHandler(async (req, res) => {
  // console.log(req.files);
  console.log(req.body.files);
  const product = new Product({
    // user: req.user._id,
    category: req.body.category,
    newArrival: req.body.newarrival,
    subcategory: req.body.category,
    brand: req.body.brand,
    productInfo: req.body.productInfo,
    user: req.body.user,
    files: req.body.files,
  });

  const createdProduct = await product.save();
  res.status(201).json({ createdProduct,message:"product created successfully" });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { user, category, subcategory, brand, productInfo,newArrival,files } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.newArrival = newArrival;
    product.files = files;
    product.user = user;
    product.category = category;
    product.subcategory = subcategory;
    product.brand = brand;
    product.productInfo = productInfo;

    const updatedProduct = await product.save();
    res.json({ updatedProduct,message:"product updated successfully" });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
