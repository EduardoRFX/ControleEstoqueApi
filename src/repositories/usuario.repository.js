const { Usuario } = require('../database/models/index');

const criar = async function(usuario) {
	const usuarioCriado = await Usuario.create(usuario);
	return usuarioCriado;
}

const atualizar =  async function(usuario, id) {
	await Usuario.update(usuario, {
		where: { id: id }
	});
}

const encontrarTodos = async function() {
	const usuarios = await Usuario.findAll();
	return usuarios;
}

const encontrarPorId = async function(id) {
	const usuario = await Usuario.findByPk(id);
	return usuario;
}

const encontrarUmPorWhere = async function(where) {
	const usuario = await Usuario.findOne({
		where: where
	});
	return usuario;
}

const deletar = async function (id) {
	return await Usuario.destroy({ where: { id: id } });
}

module.exports = {
	criar: criar,
	atualizar: atualizar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	encontrarUmPorWhere: encontrarUmPorWhere,
	deletar: deletar,
}