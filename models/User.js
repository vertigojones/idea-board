const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  password: String,
  ideas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Idea'
    }
  ]
})

module.exports = mongoose.model('User', User)
