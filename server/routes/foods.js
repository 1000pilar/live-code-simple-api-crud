const express = require('express')
const router = express.Router()
const foodsController = require('../controllers/foods-cont.js')



router.post('/', foodsController.create)


module.exports = router
