# Israride API

Backend API for the Israride platform, currently focused on ride pricing calculations.

---

## 🚀 Live API

### 🔗 Health Check

👉 `https://israride-api.onrender.com/health`

---

### 🔗 Swagger UI (Interactive API)

👉 `https://moralist1992.github.io/israride-api/swagger/`

---

### 🔗 OpenAPI Specification (Source of Truth)

👉 `docs/api/openapi.yaml`

---

## 📡 API

### Endpoint

POST `/api/v1/pricing/calculate`

---

## 🧪 Example Request

```json
{
  "distanceKm": 10,
  "durationMin": 15
}
```

Test via Swagger UI:

👉 `https://moralist1992.github.io/israride-api/swagger/`

---

## ⚙️ Description

The backend provides API endpoints for the Israride platform.

Currently, it implements a pricing module that calculates ride cost based on distance and duration.

Pricing logic is controlled internally via policies.
Clients provide only trip data, while pricing rules are applied within the system.

---

## 🧠 Architecture Role

This service acts as a backend API layer with a modular architecture.

```plaintext
Frontend
   ↓
Backend API (this service)
   ↓
Pricing module
```

---

## 🛠 Local Development

### Install dependencies

```bash
npm install
```

---

### Run server

```bash
npm start
```

---

### Local Swagger UI

```plaintext
http://localhost:3000/docs
```

---

## 📄 Related Documentation

Full system documentation:

👉 `https://github.com/Moralist1992/israride-architecture`
