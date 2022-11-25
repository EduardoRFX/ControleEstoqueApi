const createError = require('http-errors')
const fornecedorRepository = require('../repositories/fornecedor.repository')

const criar = async function(fornecedor) {
    const fornecedorCriado = await fornecedorRepository.criar(fornecedor)
    return fornecedorCriado
}

const atualizar = async function(fornecedor, id) {
    const existeFornecedor = await fornecedorRepository.encontrarPorId(id)

    if(!existeFornecedor) {
        return createError(404, 'Fornecedor não existe')
    }

    await fornecedorRepository.atualizar(fornecedor, id)
    return await fornecedorRepository.encontrarPorId(id)
}

const encontrarTodos = async function() {
    const fornecedores = await fornecedorRepository.encontrarTodos()
    return fornecedores
}

const encontrarPorId = async function (id) {
    const fonecedor = await fornecedorRepository.encontrarPorId(id)
    
    if(!fonecedor) {
        createError(404, 'Fonecedor não existe')
    }

    return fonecedor

}

const deletar = async function(id) {
    const fornecedor = await fornecedorRepository.encontrarPorId(id)

    if(!fornecedor) {
        createError(404, 'Fonecedor não existe')
    }
    
    await fornecedorRepository.deletar(id)
    return fornecedor
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar
}