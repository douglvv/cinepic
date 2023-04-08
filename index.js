//npm install express express-handlebars nodemon
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

const routes = require('./routes')
app.get('/search', routes);



try {
    const porta = 8000
    app.listen(porta)
    console.log('App rodando na porta ' + porta)
} catch (error) {
    console.log(error)
}