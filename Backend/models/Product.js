const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  sku: { type: String, unique: true },
  price: Number,
  category: String,
  status: { type: String, enum: ['active','inactive','discontinued'], default: 'active' },
  enterprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise' },
  assignedToEmployee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
