const express = require("express");
const router = express.Router();
const Controller = require("./Controller");

router.get("/search", Controller.searchMovie);
// router.get("/criar", Controller.criarCliente);
// router.post("/criarPost", Controller.criarClientePost);
// router.get("/editar/:id", Controller.editarCliente);
// router.post("/editarPost", Controller.editarClientePost);
// router.post("/remover", Controller.removerCliente);

module.exports = router;
