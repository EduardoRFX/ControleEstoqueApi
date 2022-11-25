const { Fornecedor } = require('../database/models/index')

const criar = async function(fornecedor) {
    const fornecedorCriado = await Fornecedor.create(fornecedor)
    return fornecedorCriado
}

const atualizar = async function(fornecedor, id) {
    await Fornecedor.update(fornecedor, {
        where: { id: id }
    })
}

const encontrarTodos = async function() {
    const fornecedores = await Fornecedor.findAll();
    return fornecedores;
}

const encontrarPorId = async function(id) {
    const fornecedor = await Fornecedor.findByPk(id)
    return fornecedor
}

const encontrarUmPorWhere = async function(where) {
    const fornecedor = await Fornecedor.findOne({
        where: where
    })
    return fornecedor
}

const deletar = async function(id) {
    return await Fornecedor.destroy({
        where: { id: id }
    })
}


module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWhere: encontrarUmPorWhere,
    deletar: deletar
}