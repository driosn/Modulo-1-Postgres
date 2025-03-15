const express = require('express');
const { obtenerPedidos, crearPedido, obtenerPedidoPorId, actualizarPedido, eliminarPedido } = require('../controllers/pedido.controller');

const router = express.Router();
router.get('/pedidos', obtenerPedidos);
router.get('/pedidos/:id', obtenerPedidoPorId);
router.post('/pedidos', crearPedido);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;