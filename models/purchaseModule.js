const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  furnitureId: {
    type:mongoose.Types.ObjectId,
    ref: 'Furniture'
  },
  product: {
    type: String,
  },
  date: {},
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  img: {
    type: String,
  },
  shippingAddress: {},
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
