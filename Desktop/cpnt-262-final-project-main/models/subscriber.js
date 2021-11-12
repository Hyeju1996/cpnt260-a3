const mongoose = require('mongoose') // import mongoose module

// subscriber schema
const subscriberSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  dateSigned: {
    type: String,
    default: new Date().toISOString().split('T')[0]
  }
})

module.exports = mongoose.model('subscriber', subscriberSchema) // export mongoose