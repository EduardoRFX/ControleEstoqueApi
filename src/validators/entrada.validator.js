const { body } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')
const { param } = require('express-validator')


const criar = function () {
    return [
        body('quantidade', validatorMessage('Quantidade')).exists().bail().isInt(),
        body('preco', validatorMessage('Preco')).exists().bail().isFloat(),
        body('item_id', validatorMessage('Item')).exists().bail().isInt(),
        body('fornecedor_id', validatorMessage('Fornecedor')).optional({ nullable: true }).isInt()
    ]
}


const encontrarPorId = function () {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),

    ]
}



module.exports = {
    criar: criar,
    encontrarPorId: encontrarPorId,
}