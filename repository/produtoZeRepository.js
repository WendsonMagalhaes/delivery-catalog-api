const db = require('../db');

const getAll = async () => {
    const result = await db.query('SELECT * FROM produtos_ze_delivery');
    return result.rows;
};

const getById = async (id) => {
    const result = await db.query('SELECT * FROM produtos_ze_delivery WHERE id = $1', [id]);
    return result.rows[0];
};

const getByNome = async (nome) => {
    const result = await db.query('SELECT * FROM produtos_ze_delivery WHERE nome ILIKE $1', [`%${nome}%`]);
    return result.rows;
};

const getByCategoria = async (categoria) => {
    const result = await db.query('SELECT * FROM produtos_ze_delivery WHERE categoria ILIKE $1', [`%${categoria}%`]);
    return result.rows;
};

const updateNome = async (id, nome) => {
    await db.query('UPDATE produtos_ze_delivery SET nome = $1 WHERE id = $2', [nome, id]);
};

const updateCategoria = async (id, categoria) => {
    await db.query('UPDATE produtos_ze_delivery SET categoria = $1 WHERE id = $2', [categoria, id]);
};

const updateDescricao = async (id, descricao) => {
    await db.query('UPDATE produtos_ze_delivery SET descricao = $1 WHERE id = $2', [descricao, id]);
};

module.exports = {
    getAll,
    getById,
    getByNome,
    getByCategoria,
    updateNome,
    updateCategoria,
    updateDescricao
};
