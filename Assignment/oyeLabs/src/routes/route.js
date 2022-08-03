const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer')

router.post('./register', customerController.customer_Create);

router.post('./login', customerController.customer_Login);

router.put('./update', customerController.customer_Update);

module.exports = router