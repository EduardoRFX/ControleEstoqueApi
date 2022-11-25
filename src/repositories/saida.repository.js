const db = require('../database/models/index')
const { Saida, Item, Usuario } = require('../database/models/index')

const criar = async function(saida) {
    const saidaCriado = await Saida.create(saida)
    return saidaCriado
}

const encontrarTodos = async function() {
    const itens = await Saida.findAll({
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }]
    });
    return itens
}

const encontrarPorId = async function(id) {
    const saida = await Saida.findByPk(id);
    return saida
}

const encontrarUmPorWherer = async function(where) {
    const saida = await Saida.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }]
    })
    return saida
}



module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWherer: encontrarUmPorWherer,
}