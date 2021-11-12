const mongoose = require('mongoose') // import mongoose module

// store schema
const storeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  imageSrc: String,
  width: Number,
  height: Number
})

module.exports = mongoose.model('store', storeSchema) // export mongoose