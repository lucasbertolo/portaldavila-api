const express = require('express');
const knex = require('./db');

const routes = express.Router();

const PropertyController = require('./controllers/PropertyController')
const UserController = require('./controllers/UserController')
const PhotosController = require('./controllers/PhotosController')

//General requests
routes.get('/', function(req,res){
        // const { id } = req.params;
        knex.select('*').from('property')
            .then(lb => {              
                res.status(200).json(lb);                
            })
            .catch(err => res.status(400).json(err))
})        

//User requests

//Property requests

//Photos requests




module.exports = routes;
