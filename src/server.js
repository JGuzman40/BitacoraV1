const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

// Middlewares básicos
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Ruta simple para verificar que el servidor está funcionando
server.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Manejo básico de errores
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;
