const db = require('../database/models/index')
const { Item } = require('../database/models/index')

const criar = async function(item) {
    const itemCriado = await Item.create(item)
    return itemCriado
}

const atualizar = async function(item, id) {
    await Item.update(item, {
        where: { id: id }
    })
}

const encontrarTodos = async function() {
    const itens = await Item.findAll();
    return itens
}

const encontrarPorId = async function(id) {
    const item = await Item.findByPk(id);
    return item
}

const encontrarUmPorWherer = async function(where) {
    const item = await Item.findOne({
        where: where
    })
    return item
}

const deletar = async function(id) {
    return await Item.destroy({
        where: { id: id }
    })
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWherer: encontrarUmPorWherer,
    deletar: deletar
}