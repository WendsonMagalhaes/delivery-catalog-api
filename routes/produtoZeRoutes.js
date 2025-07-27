const express = require('express');
const router = express.Router();
const controller = require('../controller/produtoZeController');
const authMiddleware = require('../middlewares/authMiddleware');



// Públicas
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/nome/:nome', controller.getByNome);
router.get('/categoria/:categoria', controller.getByCategoria);

// Privadas
router.patch('/:id/nome', authMiddleware, controller.editarNome);
router.patch('/:id/categoria', authMiddleware, controller.editarCategoria);
router.patch('/:id/descricao', authMiddleware, controller.editarDescricao);

module.exports = router;
