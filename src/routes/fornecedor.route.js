const express = require('express')
const router = express.Router()
const fornecedorController = require('../controllers/fornecedor.controller.js')
const verifyJWT = require('../middlewares/authorizator')
const fornecedorValidator = require('../validators/fornecedor.validator.js')


router.post('/', verifyJWT, fornecedorValidator.criar(), fornecedorController.criar)

router.get('/', verifyJWT, fornecedorController.encontrarTodos)

router.get('/:id', verifyJWT, fornecedorValidator.encontrarPorId(), fornecedorController.encontrarPorId)

router.put('/:id', verifyJWT, fornecedorValidator.atualizar(), fornecedorController.atualizar)

router.delete('/:id', verifyJWT, fornecedorValidator.deletar(), fornecedorController.deletar)


module.exports = router
