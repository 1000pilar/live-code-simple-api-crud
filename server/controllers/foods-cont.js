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
    Food.findOne({_id: req.body.id}, (err, food)=>{
      if(err){
        res.send(err)
      } else {
        res.send(food)
      }
    })
  }
}
