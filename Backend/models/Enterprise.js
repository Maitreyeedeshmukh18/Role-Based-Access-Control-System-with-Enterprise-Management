const mongoose = require('mongoose');

const enterpriseSchema = new mongoose.Schema({
  name: String,
  location: String,
  contactInfo: String
});

module.exports = mongoose.model('Enterprise', enterpriseSchema);

