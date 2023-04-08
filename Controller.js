const axios = require('axios');
const { query } = require('express');

const Controller = {
    async searchMovie(req, res) {
        try {
            let query = ''
            console.log(req.query.movie1)
            if (req.query.movie1) {
                query = req.query.movie1.trim();
            }
            
            const response = await axios.get(`http://www.omdbapi.com/?apikey=6b526007&s=${query}`);            
            const movies = response.data.Search;
            res.json(movies)
        } catch (error) {
            console.log(error);
            res.render('error');
        }
    }
};

module.exports = Controller;