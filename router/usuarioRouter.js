const express = require('express');
const router = express.Router();
const UsuarioController= require("../controllers/usuarioController");

router.get("/usuario", UsuarioController.listarUsuarios);
router.post("/usuario", UsuarioController.crearUsuario);
router.get("/buscar/:correo",UsuarioController.buscarUsuario); 
router.delete("/usuario/:id",UsuarioController.eliminarUsuario);
router.put("/usuario/:id",UsuarioController.actualizarUsuario);

module.exports = router;
