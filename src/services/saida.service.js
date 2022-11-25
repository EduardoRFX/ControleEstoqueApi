const saidaRepository = require('../repositories/saida.repository')
const itemRepository = require('../repositories/item.repository')
const createError = require('http-errors')


const create = async function (saida) {
    const item = await itemRepository.encontrarPorId(saida.item_id)
    
    if(!item) {
        return createError(404, 'Item não existe, saida inválida')
    }

    const quantidade = item.quantidade - saida.quantidade
    
    if (quantidade < 0 ) {
        createError(400, 'Quantidade do estoque não pode ficar inferior a 0')
    }
    
    const saidaCriada = await saidaRepository.criar(saida)
    await itemRepository.atualizar({ quantidade }, item.id)
    return saidaCriada
}

const encontrarTodos = async function () {
    const saidas = await saidaRepository.encontrarTodos()
    return saidas
}


const encontrarPorId = async function (id) {
    const saida = await saidaRepository.encontrarPorId(id)

    if (!saida) {
        return createError(404, 'Saida não encontrada!')
    }

    return saida
}


module.exports = {
    create: create,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    
}