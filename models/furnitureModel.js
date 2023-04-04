const mongoose = require('mongoose');
const slugify = require('slug')

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: [2, 'Name must be at least 2 characters'],
  },
  partNumber: {
    type: String,
    required: [true, 'Please provide part number'],
    minLength: [2, 'Part number must be at least 2 characters'],
  },
  type: {
    type: String,
    enum: ['sofas', 'chairs', 'tables', 'beds'],
    default: ['undefined'],
  },
  warranty: {
    type: Number,
    min: [1, 'Warranty must be at least 1 year'],
  },
  color: {
    type: String,
    required: [true, 'Please provide colors'],
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide short description'],
    minLength: [5, 'Short Description must be at least 5 characters'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
    min: [0, 'price must be positive number'],
  },
  quantity: {
    type: Number,
    min: [0, 'quantity must be positive number'],
  },
  img: String,
  slug: String,
  ratingsAverage: {
    type: Number,
    default: 1,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        //this only points to current doc on New document creation
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    // select: false,
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});
furnitureSchema.pre('save', function(next) {

  this.slug = slugify(`${this.type} ${this.name} ${this.partNumber}`, { lower: true });
  next();
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;
