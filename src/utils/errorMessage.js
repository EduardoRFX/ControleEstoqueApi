const validatorMessage = function(atributo) {
    return `A propriedade '${atributo}' é invalida`
}

const notExists = function(atributo) {
    return `${atributo} não existe`
}


module.exports = {
    validatorMessage: validatorMessage,
    notExists: notExists
}