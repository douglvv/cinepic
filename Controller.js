const axios = require('axios');
const { query } = require('express');


const Controller = {
    async searchMovie(req, res) {
        try {
            const key = req.key;
            let query = req.query.query;
                // console.log('Key: '+ key + '\t Query: '+query)
            
            // Check if the query is empty
            // if(!query){
            //     let errorMsg = true
            //    res.render('home', {errorMsg: errorMsg})
            // } else{
                // Fetches the data from de API and send the data to the view
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);            
                const movies = await response.data.Search
                // console.log(movies)
                res.render('home', {movies: movies});
            // }
        } catch (error) {
            console.log(error);
        }
    },

    async getMovie(req, res) {
        try{
           const key = req.key;
           const type = req.params.type;
           const imdbId = req.params.id;

           const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&type=${type}&i=${imdbId}`);
           const data = await response.data;
            
           console.log(data)
           // Check if there is a result
        //    if (response.Response == 'True'){
            res.render('movie/movie', {data: data})
        //    } else {
        //     res.redirect('home');
        //    }

        } catch(error){
            console.log(error)
        }
        
    }
};

module.exports = Controller;