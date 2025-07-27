// Middleware para proteger rotas de edição com token Bearer
require('dotenv').config();

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

    const token = authHeader.split(' ')[1];

    if (!token || token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Token inválido' });
    }

    next();
}

module.exports = authMiddleware;
