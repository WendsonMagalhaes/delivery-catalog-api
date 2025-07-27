const repo = require('../repository/produtoZeRepository');

const getAllProdutos = () => repo.getAll();
const getProdutoPorId = (id) => repo.getById(id);
const getProdutosPorNome = (nome) => repo.getByNome(nome);
const getProdutosPorCategoria = (categoria) => repo.getByCategoria(categoria);

const editarNome = (id, nome) => repo.updateNome(id, nome);
const editarCategoria = (id, categoria) => repo.updateCategoria(id, categoria);
const editarDescricao = (id, descricao) => repo.updateDescricao(id, descricao);

module.exports = {
    getAllProdutos,
    getProdutoPorId,
    getProdutosPorNome,
    getProdutosPorCategoria,
    editarNome,
    editarCategoria,
    editarDescricao
};
