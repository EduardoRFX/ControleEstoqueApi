const itemReportService = require('../services/item-report.service')

const xlsx = async function(req, res, next) {
    try {
        const itens = await itemReportService.criarXlsx(req.query)
        res.send(itens)

    }catch(error) {
        return next()
    }
}

module.exports = {
    xlsx: xlsx
}