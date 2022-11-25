const entradaService = require('../services/entrada.service.js')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const response = await entradaService.create({
            quantidade: req.body.quantidade,
            usuario_id: req.usuario_id,
            preco: req.body.preco,
            item_id: req.body.item_id,
            fornecedor_id: req.body.fornecedor_id
        })

        if (response && response.message) {
            throw response
        }

        res.json(response)

    } catch (error) {
        return next(error)
    }
}


const encontrarTodos = async function (req, res, next) {
    try {
        const response = await entradaService.encontrarTodos()
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
        const response = await entradaService.encontrarPorId(req.params.id)

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
}