const express = require('express');
const movieRoutes = express.Router();
const uuid = require('uuid');
const MOVIES = [];

movieRoutes
    .get('/', (req, res) => {
        // res.send(MOVIES);
        res.send(MOVIES.filter(movie => {
            for (key in req.query) {
                if(String(movie[key].toLowerCase()) !== req.query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;    
        }));
    })
    .post('/', (req, res) => {
        //save new movie
        let newMovie = req.body;
        //give it an id
        newMovie._id = uuid();
        // 'save' to our database
        MOVIES.push(newMovie);
        //send movie back
        res.send(newMovie);
    })

movieRoutes
    .get('/:id/', (req, res) => {
        const foundMovie = MOVIES.find(movie => movie._id === req.params.id);
        res.send(foundMovie);
    })
    .put('/:id/', (req, res) => {
        const toBeEdited = MOVIES.find(movie => movie._id === req.params.id);
        for(let key in req.body) {
            toBeEdited[key] = req.body[key]
        }
        res.send(toBeEdited);
    })
    .delete('/:id/', (req, res) => {
        const deleteMovie = MOVIES.find(movie => movie._id === req.params.id);
        MOVIES.splice(MOVIES.indexOf(deleteMovie))
        res.send(deleteMovie);
    });

    module.exports = movieRoutes;