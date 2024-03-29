const express = require('express');
const request = require('request');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=YOUR_API_KEY';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render('results', {data: data});
        }
    });
});


