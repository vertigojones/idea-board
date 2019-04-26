const User = require('../models/User')
const Idea = require('../models/Idea')
const mongoose = require('./connections')

const mars = new Idea({
    title: 'Fly to Mars',
    description: "Earth isn't Red enough. Let's move to a new planet"
})

const tesla = new Idea({
    title: 'Build a Car',
    description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

const elon = new User({
    username: 'elon_musk',
    password: 'spaceiscool',
    ideas: [mars, tesla]
})

User.remove({})
    .then(() => Idea.remove({}))
    .then(() => Idea.insertMany([mars, tesla]))
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())