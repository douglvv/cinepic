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

// Main route
app.get('/', function (req, res) { res.render('home')})


const router = express.Router();
const Controller = require("./Controller");
const getAPIKey = require('./helpers/key'); // Middleware for API Key

// Routes
app.use(router)
router.get('/', function (req, res) {res.render('home')}); // Main route
router.get('/search', function (req, res) {res.render('search/search')}); // Loads search page
router.get('/search/s/', getAPIKey, Controller.searchMovie); // Searches for a title and display results
router.get('/:type/:id', getAPIKey, Controller.getMovie); // Displays all data of a title


try {
    const porta = 8000
    app.listen(porta)
    console.log('App rodando na porta: ' + porta)
} catch (error) {
    console.log(error)
}