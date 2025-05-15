const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// Route pour afficher tous les todos
router.get("/", todoController.getAllTodos);

// Route pour afficher un todo spécifique
router.get("/:id", todoController.getTodoById);

// Route pour ajouter un nouveau todo
router.post("/", todoController.addTodo);

// Route pour marquer un todo comme terminé/non terminé
router.post("/:id/toggle", todoController.toggleTodoStatus);

module.exports = router;