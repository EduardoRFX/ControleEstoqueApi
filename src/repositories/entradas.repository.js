const db = require('../database/models/index')
const { Entrada, Item, Usuario, Fornecedor } = require('../database/models/index')

const criar = async function(entrada) {
    const entradaCriado = await Entrada.create(entrada)
    return entradaCriado
}

const encontrarTodos = async function() {
    const itens = await Entrada.findAll({
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }, 
        {
            model: Fornecedor,
            as: 'fornecedor'
        }]
    });
    return itens
}

const encontrarPorId = async function(id) {
    const entrada = await Entrada.findByPk(id);
    return entrada
}

const encontrarUmPorWherer = async function(where) {
    const entrada = await Entrada.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }, 
        {
            model: Fornecedor,
            as: 'fornecedor'
        }]
    })
    return entrada
}



module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWherer: encontrarUmPorWherer,
}