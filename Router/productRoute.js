const product_details = require('../controllers/productcontroler')
const express  = require('express')
const router = express.Router()

router.post('/add',product_details.createProduct)

module.exports = router 

