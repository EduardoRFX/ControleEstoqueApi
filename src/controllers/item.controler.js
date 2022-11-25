const itemService = require('../services/item.service.js')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const response = await itemService.create({
            nome: req.body.nome,
            usuario_id: req.usuario_id
        })


        res.send(response)

    } catch (error) {
        return next(error)
    }
}


const atualizar = async function (req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await itemService.atualizar({
            nome: req.body.nome
        }, req.params.id)

        if (response && response.message) {
            throw response
        }

        res.send(response)
    } catch (error) {
        next(error)
    }
}

const encontrarTodos = async function (req, res, next) {
    try {
        const response = await itemService.encontrarTodos()
        res.send(response)

    } catch (error) {
        next(error)
    }
}

const encontrarPorId = async function (req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const response = await itemService.encontrarPorId(req.params.id)

        if (response && response.message) {
            throw response;
        }

        res.send(response)

    } catch (error) {
        next(error)
    }
}

const deletar = async function (req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await itemService.deletar(req.params.id)

        if (response && response.message) {
            throw response;
        }

        res.send(response)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    create: create,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
}