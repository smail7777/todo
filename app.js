const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// Configuration du moteur de templates EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuration d'express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Redirection de la racine vers /todos
app.get("/", (req, res) => {
  res.redirect("/todos");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Importation des routes
const todoRoutes = require("./routes/todoRoutes");

// Utilisation des routes
app.use("/todos", todoRoutes);