const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    files: {
      type: mongoose.Schema.Types.Mixed,
    },
    newArrival: { type: Boolean },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    brand: {
      type: String,
    },
    productInfo: {
      info: {
        name: {
          type: Array,
        },
        values1: {
          type: Array,
        },
        values2: {
          type: Array,
        },
      },
      title: {
        type: String,
      },
      price: {
        type: String,
        default: 0,
      },
      shortdescription: {
        type: String,
      },
      longdescription: {
        type: String,
      },
      countInStock: {
        type: String,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  },
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
