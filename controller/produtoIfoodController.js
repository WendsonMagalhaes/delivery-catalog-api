const service = require('../service/produtoIfoodService');

const getAll = async (req, res) => {
    const produtos = await service.getAllProdutos();
    res.json(produtos);
};

const getById = async (req, res) => {
    const produto = await service.getProdutoPorId(req.params.id);
    produto ? res.json(produto) : res.status(404).json({ error: 'Produto não encontrado' });
};

const getByNome = async (req, res) => {
    const produtos = await service.getProdutosPorNome(req.params.nome);
    res.json(produtos);
};

const getByCategoria = async (req, res) => {
    const produtos = await service.getProdutosPorCategoria(req.params.categoria);
    res.json(produtos);
};

// 🔒 Privados
const editarNome = async (req, res) => {
    await service.editarNome(req.params.id, req.body.nome);
    res.json({ success: true });
};

const editarCategoria = async (req, res) => {
    await service.editarCategoria(req.params.id, req.body.categoria);
    res.json({ success: true });
};

const editarDescricao = async (req, res) => {
    await service.editarDescricao(req.params.id, req.body.descricao);
    res.json({ success: true });
};

module.exports = {
    getAll,
    getById,
    getByNome,
    getByCategoria,
    editarNome,
    editarCategoria,
    editarDescricao
};
