const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurants-cont.js')



router.post('/', restaurantsController.create)
router.get('/', restaurantsController.findAll)
router.get('/:id', restaurantsController.findOne)
router.put('/:id', restaurantsController.update)
router.delete('/:id', restaurantsController.delete)



module.exports = router
