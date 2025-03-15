const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};

exports.crearCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
};

exports.obtenerClientePorId = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404);
    }

    const cliente = await Cliente.findByPk(id)

    if (cliente) {
        res.json(cliente);
        return;
    }

    res.status(404);
}

exports.actualizarCliente = async (req, res) => {
    const id = req.params.id;
    const { nombre, correo } = req.body;

    if (!id) {
        return res.status(404);
    }

    if (!nombre || !correo) {
        return res.status(404).json({
            error: "El nombre y el correo son obligatorios"
        })
    }

    const cliente = await Cliente.findByPk(id);

    if (cliente) {
        await cliente.update({ nombre, correo });
        return res.json({ message: "Cliente actualizado", cliente });
    }

    return res.status(404);
}

exports.eliminarCliente = async (req, res) => {
    const id = req.params.id;
    
    if (!id) {
        return res.status(404);
    }

    const cliente = await Cliente.findByPk(id);

    if (cliente) {
        await cliente.destroy();
        return res.json({ message: "Cliente borrado" });
    }

    return res.status(404);
}