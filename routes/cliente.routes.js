const express = require('express');
const { obtenerClientes, crearCliente, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');

const router = express.Router();
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
router.get('/clientes/:id', obtenerClientePorId);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

module.exports = router;