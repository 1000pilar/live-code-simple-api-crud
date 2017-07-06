const Restaurant = require('../models/restaurant.js')


module.exports = {
  create: (req, res)=>{
    var createRestaurant = new Restaurant({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address
    })

    createRestaurant.save((err, restaurant)=>{
      if(err){
        res.send(err)
      } else {
        res.send(restaurant)
      }
    })
  },
  findAll: (req, res)=>{
    Restaurant.find((err, restaurant)=>{
      if(err){
        res.send(err)
      } else {
        res.send(restaurant)
      }
    })
  },
  findOne: (req, res)=>{
    Restaurant.findOne({_id: req.params.id}, (err, restaurant)=>{
      if(err){
        res.send(err)
      } else {
        res.send(restaurant)
      }
    })
  },
  update: (req, res)=>{
    Restaurant.findOne({_id: req.params.id}, (err, restaurant)=>{
      if(err){
        res.send(err)
      } else {
        var restaurantUpdate = {
          name: req.body.name || restaurant.name,
          owner: req.body.owner || restaurant.owner,
          address: req.body.address || restaurant.address
        }
        Restaurant.update({_id: req.params.id}, {$set: restaurantUpdate}, {new: true}, (err, result)=>{
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
    Restaurant.remove({_id: req.params.id}, (err, restaurant)=>{
      if(err){
        res.send(err)
      } else {
        res.send(restaurant)
      }
    })
  }
}
