const User = require('../models/User')
const Idea = require('../models/Idea')

const ideasController = {
  index: (req, res) => {
    let userId = req.params.userId
    User.findById(userId).populate('ideas')
      .then((user) => {
        res.send(user.ideas)
      })
  },
  show: (req, res) => {
    let ideaId = req.params.ideaId
    Idea.findById(ideaId)
      .then((idea) => {
        res.send(idea)
      })
  },
  delete: (req, res) => {
    let ideaId = req.params.ideaId
    Idea.findByIdAndDelete(ideaId)
      .then(() => {
        res.send(200)
      })
  },
  update: (req, res) => {
    let ideaId = req.params.ideaId
    Idea.findByIdAndUpdate(ideaId, req.body, { new: true })
      .then((updatedIdea) => {
        updatedIdea.save()
        res.send(updatedIdea)
      })
  },
  create: (req, res) => {
    let userId = req.params.userId
    User.findById(userId)
      .then((user) => {
        console.log(user)
        Idea.create(req.body)
          .then((newIdea) => {
            console.log(newIdea)
            user.ideas.push(newIdea)
            user.save()
            res.send(newIdea)
          })
      })
  }

}

module.exports = ideasController
