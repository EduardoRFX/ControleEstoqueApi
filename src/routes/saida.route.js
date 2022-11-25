const express = require('express')
const router = express.Router()
const saidaController = require('../controllers/saida.controler.js')
const verifyJWT = require('../middlewares/authorizator')
const saidaValidator = require('../validators/saida.validator.js')


router.post('/', verifyJWT, saidaValidator.criar(), saidaController.create)

router.get('/', verifyJWT, saidaController.encontrarTodos)

router.get('/:id', verifyJWT, saidaValidator.encontrarPorId(), saidaController.encontrarPorId)

module.exports = router
