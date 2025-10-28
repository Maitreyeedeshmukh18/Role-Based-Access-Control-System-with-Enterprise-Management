const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [{
    module: String,
    create: Boolean,
    read: Boolean,
    update: Boolean,
    delete: Boolean
  }]
});

module.exports = mongoose.model('Role', roleSchema);
