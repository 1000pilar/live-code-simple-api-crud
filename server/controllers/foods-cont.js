const Food = require('../models/food.js')


module.exports = {
  create: (req, res)=>{
    var createFood = new Food({
      name: req.body.name,
      price: req.body.price
    })

    createFood.save((err, food)=>{
      if(err){
        res.send(err)
      } else {
        res.send(food)
      }
    })
  },
  findAll: (req, res)=>{
    Food.find((err, food)=>{
      if(err){
        res.send(err)
      } else {
        res.send(food)
      }
    })
  },
  findOne: (req, res)=>{
    Food.findOne({_id: req.params.id}, (err, food)=>{
      if(err){
        res.send(err)
      } else {
        res.send(food)
      }
    })
  },
  update: (req, res)=>{
    Food.findOne({_id: req.params.id}, (err, food)=>{
      if(err){
        res.send(err)
      } else {
        var foodUpdate = {
          name: req.body.name || food.name,
          price: req.body.price || food.price
        }
        Food.update({_id: req.params.id}, {$set: foodUpdate}, {new: true}, (err, result)=>{
          if(!err){
            res.send(result)
          } else {
            res.send(err)
          }
        })
      }
    })
  },
  delete: (req, res)=>{
    Food.remove({_id: req.params.id}, (err, food)=>{
      if(err){
        res.send(err)
      } else {
        res.send(food)
      }
    })
  }
}
