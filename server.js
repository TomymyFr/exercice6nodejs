// exercice 4

const express = require('express');

const PORT = process.env.PORT || 3000;

// instancier le serveur applicatif "express"
const app = express();
app.use(express.json()); // dire à Express de reconnaitre les contenus JSON depuis les requêtes POST

// définir le point d'entrée `GET /` qui répond "Bonjour !" à chaque requête reçue
app.get("/", (req, res) => {
    res.send("Bonjour !");
});

// ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé
app.get("/hello", (req, res) => {
    if (req.query.nom === undefined) {
        res.send('Quel est votre nom ?');
    } else {
        res.send("Bonjour, " + req.query.nom + " !");
    }
});

// demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT);

// ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post("/chat", (req, res) => {
    if (req.body.msg === 'ville') {
        res.send("Nous sommes à Paris");
    } else if (req.body.msg === 'météo') {
        res.send("Il fait beau");
    } else {
        res.send("Paramètre msg non reconnu");
    }
});