require('dotenv').config()
const usuarioRepository = require('../repositories/usuario.repository.js')
const bcrypt = require('bcrypt')
const createError = require('http-errors')
const { sign } = require('jsonwebtoken')

const create = async function (usuario) {
    const existeUsuario = await usuarioRepository.encontrarUmPorWhere({ email: usuario.email })

    if (existeUsuario) {
        return createError(409, 'Usuário já existe!')
    }

    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.criar(usuario)
    return usuarioCriado
}

const encontrarTodos = async function () {
    const usuarios = await usuarioRepository.encontrarTodos()
    return usuarios
}

const login = async function (usuario) {
    const usuarioLogin = await usuarioRepository.encontrarUmPorWhere({
        email: usuario.email
    })

    if(!usuarioLogin) {
        return createError(401, 'Usuário inválido')
    }

    const comparacaoSenha = await bcrypt.compare(usuario.senha, usuarioLogin.senha)

    if(!comparacaoSenha) {
        return createError(401, 'Usuário inválido')
    }

    const token = sign({
        id: usuarioLogin.id
    }, process.env.SECRET, {})
    delete usuarioLogin.senha

    return {
        auth: true,
        usuario: usuarioLogin,
        token: token
    }
}

const atualizar = async function (usuario, id) {
    const existeUsuario = await usuarioRepository.encontrarPorId(id)

    if (!existeUsuario) {
        return createError(404, 'Usuario não existe')
    }

    await usuarioRepository.atualizar(usuario, id)

    return await usuarioRepository.encontrarPorId(id)
}

const encontrarPorId = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id)

    if (!usuario) {
        return createError(404, 'Usuário não encontrado!')
    }

    return usuario
}

const deletar = async function (id) {
    const usuario = await usuarioRepository.encontrarPorId(id)

    if (!usuario) {
        return createError(404, 'Usuário não encontrado!')
    }

    await usuarioRepository.deletar(id)
    return usuario
}

module.exports = {
    create: create,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
    login: login
}