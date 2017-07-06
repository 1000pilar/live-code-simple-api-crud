const mongoose = require('mongoose')
    , Schema = mongoose.Schema


const restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String
})


const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
