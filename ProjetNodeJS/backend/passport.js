const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Récupération des données d'entreprise
const entreprise = require('./entreprise.json');

// Configuration de la stratégie d'authentification locale
passport.use(new LocalStrategy(
  function(username, password, done) {
    const user = entreprise.users.find(user => user.username === username && user.password === password);
    if (user) {
      return done(null, user);
    }
    return done(null, false, { message: 'Incorrect username or password.' });
  }
));

