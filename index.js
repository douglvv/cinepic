//npm install express express-handlebars nodemon axios
const express = require('express')
const handlebars = require('express-handlebars');

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.json())
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home')
})

const router = express.Router();
const Controller = require("./Controller");
const getAPIKey = require('./helpers/key'); // middleware para a chave da API

// Rotas
app.use(router)
router.get('/', function (req, res) {res.render('home')})
router.get('/search', getAPIKey, Controller.searchMovie)
router.get('/:type/:id', getAPIKey, Controller.getMovie)


try {
    const porta = 8000
    app.listen(porta)
    console.log('App rodando na porta ' + porta)
} catch (error) {
    console.log(error)
}