const Usuario = require('../models/usuarioModel');

const usuarioController = {
    createUsuario: (req, res) => {
        const newUsuario = {
            nome: req.body.nome,
            senha: req.body.senha,
            funcao: req.body.funcao,
        };

        Usuario.create(newUsuario, (err, usuarioId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    getUsuarioById: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.findById(usuarioId, (err, usuario) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario not found' });
            }
            res.render('usuarios/show', { usuario });
        });
    },

    getAllUsuario: (req, res) => {
        Usuario.getAll((err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('usuarios/index', { usuarios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('usuarios/create');
    },

    renderEditForm: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.findById(usuarioId, (err, usuario) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario not found' });
            }
            res.render('usuarios/edit', { usuario });
        });
    },

    updateUsuario: (req, res) => {
        const usuarioId = req.params.id;
        const updatedUsuario = {
            usuarioname: req.body.usuarioname,
            senha: req.body.senha,
            funcao: req.body.funcao,
        };

        Usuario.update(usuarioId, updatedUsuario, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    deleteUsuario: (req, res) => {
        const usuarioId = req.params.id;

        Usuario.delete(usuarioId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    searchUsuario: (req, res) => {
        const search = req.query.search || '';

        Usuario.searchByName(search, (err, usuario) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json({ usuario });
        });
    },
};

module.exports = usuarioController;
