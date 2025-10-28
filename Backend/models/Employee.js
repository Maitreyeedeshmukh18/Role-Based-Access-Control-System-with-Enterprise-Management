const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  roleTitle: String,
  salary: Number,
  status: { type: String, enum: ['active','inactive','terminated'], default: 'active' },
  enterprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise' }
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
