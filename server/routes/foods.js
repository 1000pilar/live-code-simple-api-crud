const express = require('express')
const router = express.Router()
const foodsController = require('../controllers/foods-cont.js')



router.post('/', foodsController.create)
router.get('/', foodsController.findAll)
router.get('/:id', foodsController.findOne)
router.put('/:id', foodsController.update)
router.delete('/:id', foodsController.delete)



module.exports = router
