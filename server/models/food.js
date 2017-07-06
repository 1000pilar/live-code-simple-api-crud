const mongoose = require('mongoose')
    , Schema = mongoose.Schema


const foodSchema = new Schema({
  name: String,
  price: Number
})


const Food = mongoose.model('Food', foodSchema)

module.exports = Food
