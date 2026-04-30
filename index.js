// Core
const express = require('express');
const app = express();

// Swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/api/openapi.yaml');

// Business logic
const pricingPolicy = require('./config/pricingPolicy');
const { calculatePrice } = require('./services/pricingEngine');

// Middleware
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API endpoint
app.post('/api/v1/pricing/calculate', (req, res) => {
  try {
    const params = req.body;
    const result = calculatePrice(params, pricingPolicy);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 🔥 ВОТ ЭТОГО НЕ ХВАТАЛО
app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});