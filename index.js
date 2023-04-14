// ------------------- IMPORTS -------------------------
// npm install express express-handlebars nodemon axios
//------------------------------------------------------

const express = require('express')
const handlebars = require('express-handlebars');

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.json())
app.use(express.static('public'))

// Rota principal
app.get('/', function (req, res) { res.render('home')})


const router = express.Router();
const Controller = require("./Controller");
const getAPIKey = require('./helpers/key'); // Middleware para a Key da API

// Routes
app.use(router)
router.get('/', function (req, res) {res.render('home')}); // Rota principal
router.get('/search', function (req, res) {res.render('search/search')}); // Carrega a página de pesquisa
router.get('/search/s/', getAPIKey, Controller.searchTitle); // Pesquisa um título e carrega os resultados
router.get('/:type/:id', getAPIKey, Controller.getTitle); // Mostra todos os dados de um título


try {
    const porta = 8000
    app.listen(porta)
    console.log('App rodando na porta: ' + porta)
} catch (error) {
    console.log(error)
}