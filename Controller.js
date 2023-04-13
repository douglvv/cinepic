const axios = require('axios');
const { query } = require('express');


const Controller = {
    async searchMovie(req, res) {
        try {
            const key = req.key;
            let query = req.query.title;
            console.log("Key: " + key + "\tQuery: " + query)

            // Fetches the data from de API
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);
            const result = await response.data.Search

            // Checks if there are results for the search
            if (response.data.Response == "True") { // Sends the data to the view
                console.log("Response: " + response.data.Response)
                console.log(result)
                res.render('search/search', { result: result });
            } else { // Sends the error message to the view
                let errorMsg = "No results found, please try searching again."
                console.log("errorMsg: " + errorMsg)
                res.render('search/search', { errorMsg: errorMsg })
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getMovie(req, res) {
        try {
            const key = req.key;
            const type = req.params.type;
            const imdbId = req.params.id;
                console.log("Key: "+ key + "\tType: " + type + "\timdbId: " + imdbId)

            // Fetches the data from de API
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&type=${type}&i=${imdbId}&plot=full`);
            const result = await response.data;

            //Check if there is a result for the search
            if (response.data.Response == "True"){ // Sends the data to the view
                console.log("Response: " + response.data.Response)
                console.log(result)
                res.render('title/title', { result: result })    
            } else { // Sends an error status
                const errorMsg = response.data.Error
                res.status(404).send('Error: ' + errorMsg + '\n Please try again later');
            }
        } catch (error) {
            console.log(error)
        }
    },
    




}; // End

module.exports = Controller;