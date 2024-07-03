//schema and models
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  fatherName: String,
  Contact: Number,
  Address: String

});

module.exports = model = mongoose.model('Personal Info', schema);;