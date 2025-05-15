 const todos = [
  { id: 1, title: "Apprendre Express", description: "Étudier les bases d'Express.js", completed: false },
  {
    id: 2,
    title: "Créer une application MVC",
    description: "Implémenter une architecture MVC avec Express",
    completed: true,
  },
  {
    id: 3,
    title: "Ajouter des formulaires",
    description: "Apprendre à gérer les formulaires avec Express",
    completed: false,
  },
];

// Méthodes du contrôleur
exports.getAllTodos = (req, res) => {
  res.render("todos/index", {
    title: "Liste des Todos",
    todos: todos,
  });
};

exports.getTodoById = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).send("Todo non trouvé");
  }

  res.render("todos/detail", {
    title: "Détail du Todo",
    todo: todo,
  });
};

exports.addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).send("Le titre et la description sont requis");
  }

  const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  const newTodo = {
    id: newId,
    title,
    description,
    completed: false,
  };

  todos.push(newTodo);
  res.redirect("/todos");
};

exports.toggleTodoStatus = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).send("Todo non trouvé");
  }

  todos[todoIndex].completed = !todos[todoIndex].completed;
  res.redirect("/todos");
};