const itemReport = require('../repositories/item-report.repository')

const criarXlsx = async function (filtros) {
    const itens = await itemReport.relatorio(filtros)
    return itens
}

module.exports = {
    criarXlsx : criarXlsx
}