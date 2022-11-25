const itemRepository = require('../repositories/item.repository.js')
const createError = require('http-errors')


const create = async function (item) {

    const itemCriado = await itemRepository.criar(item)
    return itemCriado
}

const encontrarTodos = async function () {
    const itens = await itemRepository.encontrarTodos()
    return itens
}


const atualizar = async function (item, id) {
    const existeItem = await itemRepository.encontrarPorId(id)

    if (!existeItem) {
        return createError(404, 'Item não existe')
    }

    await itemRepository.atualizar(item, id)

    return await itemRepository.encontrarPorId(id)
}

const encontrarPorId = async function (id) {
    const item = await itemRepository.encontrarPorId(id)

    if (!item) {
        return createError(404, 'Item não encontrado!')
    }

    return item
}

const deletar = async function (id) {
    const item = await itemRepository.encontrarPorId(id)

    if (!item) {
        return createError(404, 'Item não encontrado!')
    }

    await itemRepository.deletar(id)
    return item
}

module.exports = {
    create: create,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
}