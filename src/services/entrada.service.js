const entradaRepository = require('../repositories/entradas.repository')
const itemRepository = require('../repositories/item.repository')
const createError = require('http-errors')


const create = async function (entrada) {
    const entradaCriada = await entradaRepository.criar(entrada)
    const item = await itemRepository.encontrarPorId(entrada.item_id)

    if(!item) {
        return createError(404, 'Item não existe, entrada inválida')
    }

    const quantidade = entradaCriada.quantidade + item.quantidade

    await itemRepository.atualizar({ quantidade }, item.id)
    return entradaCriada
}

const encontrarTodos = async function () {
    const entradas = await entradaRepository.encontrarTodos()
    return entradas
}


const encontrarPorId = async function (id) {
    const entrada = await entradaRepository.encontrarUmPorWherer({ id: id })

    if (!entrada) {
        return createError(404, 'Entrada não encontrada!')
    }

    return entrada
}


module.exports = {
    create: create,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    
}