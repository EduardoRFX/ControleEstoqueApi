const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item-report.controler')
const verifyJWT = require('../middlewares/authorizator')

router.get('/', verifyJWT, itemController.xlsx)

module.exports = router
