const axios = require('axios');
const { query } = require('express');
const key = require('./key')

const Controller = {
    async searchMovie(req, res) {
        try {
            let query = req.query.query;
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);            
            const movies = response.data.Search;
            console.log(movies)
            res.json(movies)
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = Controller;