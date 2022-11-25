const express = require('express')
const router = express.Router()
const entradaController = require('../controllers/entrada.controler.js')
const verifyJWT = require('../middlewares/authorizator')
const entradaValidator = require('../validators/entrada.validator.js')


router.post('/', verifyJWT, entradaValidator.criar(), entradaController.create)

router.get('/', verifyJWT, entradaController.encontrarTodos)

router.get('/:id', verifyJWT, entradaValidator.encontrarPorId(), entradaController.encontrarPorId)

module.exports = router
