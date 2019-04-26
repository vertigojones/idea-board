const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Idea = new Schema({
  title: String,
  description: String
})

module.exports = mongoose.model('Idea', Idea)
