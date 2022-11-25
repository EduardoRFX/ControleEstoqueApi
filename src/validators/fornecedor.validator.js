const { body, param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')


const criar = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('telefone', validatorMessage('Telefone')).exists().bail().isString()

    ]
}

const atualizar = function () {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('telefone', validatorMessage('Telefone')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt()

    ]
}

const encontrarPorId = function() {
    return [
        param('id', validatorMessage('ID')).exists().bail().isInt()
    ]
}

const deletar = function() {
    return [
        param('id', validatorMessage('ID')).exists().bail().isInt()
    ]
}


module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarPorId: encontrarPorId,
    deletar: deletar
}