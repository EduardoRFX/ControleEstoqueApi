const { sequelize } = require('../database/models/index')
const { QueryTypes } = require('sequelize')

const relatorio = async function (filtros) {
    const filtrosSql = filtrar(filtros)

    let consulta = `select 
    * 
from 
    (
    select 
        i.nome as 'nome', 
        s.quantidade as 'quantidade', 
        'Saída' as 'tipo', 
        0 as 'preco', 
        s.createdAt as 'createdAt' 
    from 
        itens as i 
        inner join saidas as s on(i.id = s.item_id) 
    where 
        i.deletedAt is null 
        and s.deletedAt is null 
    union 
    select 
        i.nome as 'nome', 
        e.quantidade as 'quantidade', 
        'Entrada' as 'tipo', 
        e.preco as 'preco', 
        e.createdAt as 'createdAt' 
    from 
        itens as i 
        inner join entradas as e on(e.item_id = i.id) 
    where 
        i.deletedAt is null 
        and e.deletedAt is null 
    ) as rl 
where 
    1 ${filtrosSql} `;
    consulta += ` order by rl.createdAt desc`;

    const dados = await sequelize.query(consulta, {
        raw: true,
        type: QueryTypes.SELECT,
    })

    return dados
}

const filtrar = function (filtros) {
    let sqlFiltros = ''

    if (filtros.dataInicial && filtros.dataInicial.trim()){
        sqlFiltros += `and rl.createdAt >=  '${filtros.dataInicial} 00:00:00'`
    }

    
    if (filtros.dataFinal && filtros.dataFinal.trim()){
        sqlFiltros += `and rl.createdAt >=  '${filtros.dataFinal} 23:59:59'`
    }

    if (filtros.nome && filtros.nome.trim()){
        sqlFiltros += `and rl.nome like '%${filtros.nome}%'`
    }

    if (filtros.tipo && filtros.tipo.trim()){
        sqlFiltros += `and rl.tipo = '${filtros.tipo}'`
    }

    if (filtros.quantidade && filtros.quantidade.trim()){
        sqlFiltros += `and rl.quantidade >= ${filtros.quantidade}`
    }

    return sqlFiltros
}
module.exports = {
    relatorio: relatorio,
}