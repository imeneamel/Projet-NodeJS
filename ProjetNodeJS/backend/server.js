const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// npm install express-session
// npm install session-file-store

// Middleware pour parser les données JSON dans les requêtes
app.use(express.json());

// Définition de la route pour la page d'accueil et les pages alternatives
app.get('/', function (req, res) {
  // Renvoi du fichier index.html
  res.sendFile(path.resolve('../frontend/index.html'));
});

app.get('/dashboard/:id', (req, res) => {
   console.log("okay");
});


// Écoute du port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Différentes pages :

app.use('/dashboard.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
});

// Routes pour les fichiers JS

app.use('/client.js', function (req, res) {
  res.set('Content-Type', 'text/javascript'); 
  res.sendFile(path.join(__dirname, '../frontend/client.js'));
});

// Route pour les feuilles de style

app.use('/style.css', function (req, res) {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname,  '/../frontend/style.css'));
});
