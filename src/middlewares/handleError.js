function montarError(error) {
    if (error.errors) {
        return error.errors.map(err => err.msg)
    }
    if (error.message) {
        return [ error.message ]
    }

    return ['Algum erro aconteceu, tente novamente mais tarde']
}

const handleError = function (error, req, res, next) {
    const errors = montarError(error)

    res.status(error.status || 500)
    res.json(errors)
}


module.exports = handleError 