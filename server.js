const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const produtoZeRoutes = require('./routes/produtoZeRoutes');
const produtoIfoodRoutes = require('./routes/produtoIfoodRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/ze-delivery', produtoZeRoutes);
app.use('/ifood', produtoIfoodRoutes);


// Swagger docs
const swaggerDocument = YAML.load('./docs/swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`🚀 API rodando em http://localhost:${PORT}`);
    console.log(`📘 Docs: http://localhost:${PORT}/docs`);
});
