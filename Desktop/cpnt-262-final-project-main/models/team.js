const mongoose = require('mongoose') // import mongoose module

// team schema
const teamSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String
})

module.exports = mongoose.model('team', teamSchema) // export mongoose