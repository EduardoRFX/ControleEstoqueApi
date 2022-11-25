const { body } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')
const { param } = require('express-validator')


const criar = function () {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        
    ]
}

const atualizar = function () {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt(),


    ]
}

const encontrarPorId = function () {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),

    ]
}


const deletar = function () {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),

    ]
}


module.exports = {
    criar: criar,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar
}