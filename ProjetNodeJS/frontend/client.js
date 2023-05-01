function findclient(username, password, done) {
  // Recherche de l'utilisateur dans l'objet "entreprise"
  const users = require('./data/entreprise.json').users;
  const user = users.find(user => user.username === username && user.password === password);
  if (users) {
    // Rediriger l'utilisateur vers la page "dashboard.html" avec l'identifiant unique du client
    window.location.href = `/dashboard.html?id=${user.id}`;
  }
  // Si l'utilisateur n'est pas trouvé ou si le mot de passe est incorrect, retourner une erreur
  return done(null, false, { message: 'Nom d\'utilisateur ou mot de passe incorrect' });
}


const Button = document.getElementById("loggingin");
// Ajouter un gestionnaire d'événements pour le bouton 
Button.addEventListener("submit", () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      findclient(username, password, done);
});

// Récupération des données JSON de l'entreprise
const entreprise = require('./data/entreprise.json');