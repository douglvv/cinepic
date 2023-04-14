const axios = require('axios');
const { query } = require('express');


const Controller = {
    async searchTitle(req, res) {
        try {
            const key = req.key;
            let query = req.query.title;
            console.log("Key: " + key + "\tQuery: " + query);

            // Faz o fetch nos dados da API
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);
            const result = await response.data.Search;

            // Verifica se tem resultados para a pesquisa
            if (response.data.Response == "True") { // Envia os dados para a view
                console.log("Response: " + response.data.Response);
                console.log(result);
                res.render('search/search', { result: result });
            } else { // Envia a mensagem de erro para a view
                let errorMsg = "No results found, please try searching again.";
                console.log("errorMsg: " + errorMsg);
                res.render('search/search', { errorMsg: errorMsg });
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getTitle(req, res) {
        try {
            const key = req.key;
            const type = req.params.type;
            const imdbId = req.params.id;
                console.log("Key: "+ key + "\tType: " + type + "\timdbId: " + imdbId)

            // Faz o fetch nos dados da API
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&type=${type}&i=${imdbId}&plot=full`);
            const result = await response.data;

            // Verifica se tem um resultado para a pesquisa
            if (response.data.Response == "True"){ // Envia os dados para a view
                console.log("Response: " + response.data.Response)
                console.log(result)
                res.render('title/title', { result: result })    
            } else { // Envia um status de erro
                const errorMsg = response.data.Error
                res.status(404).send('Error: ' + errorMsg + ' Please try again later');
            }
        } catch (error) {
            console.log(error)
        }
    },
    




}; // Fim da classe

module.exports = Controller;