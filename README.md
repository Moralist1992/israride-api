# Israride API

Backend service responsible for pricing calculations.

## API

### Endpoint

POST /api/v1/pricing/calculate

### Swagger UI

http://localhost:3000/docs

### OpenAPI Specification

docs/api/openapi.yaml

## Description

The backend calculates ride pricing based on distance and duration.

Pricing logic is controlled internally via policies.
Clients only send trip parameters.