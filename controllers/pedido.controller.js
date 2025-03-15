const { Pedido } = require('../models');

exports.obtenerPedidos = async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
};

exports.crearPedido = async (req, res) => {
    const { total, clienteId } = req.body;
    const currentDate = new Date().toISOString();

    const pedido = await Pedido.create({
        fecha: currentDate,
        total,
        clienteId,
    });
    res.status(201).json(pedido);
};

exports.obtenerPedidoPorId = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404);
    }

    const pedido = await Pedido.findByPk(id)

    if (pedido) {
        res.json(pedido);
        return;
    }

    res.status(404);
}

exports.actualizarPedido = async (req, res) => {
    const id = req.params.id;
    const currentDate = new Date().toISOString();
    const { total, clienteId } = req.body;

    if (!id) {
        return res.status(404);
    }

    if (!total || !clienteId) {
        return res.status(404).json({
            error: "La fecha y el id del cliente son obligatorios"
        })
    }

    const pedido = await Pedido.findByPk(id);

    if (pedido) {
        await pedido.update({ currentDate, total, clienteId });
        return res.json({ message: "Pedido actualizado", pedido });
    }

    return res.status(404);
}

exports.eliminarPedido = async (req, res) => {
    const id = req.params.id;
    
    if (!id) {
        return res.status(404);
    }

    const pedido = await Pedido.findByPk(id);

    if (pedido) {
        await pedido.destroy();
        return res.json({ message: "Pedido borrado" });
    }

    return res.status(404);
}