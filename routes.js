const express = require('express');
const routes = express.Router();
const knex = require('./db');

routes.get('/', function(req,res){
        // const { id } = req.params;
        knex.select('*').from('property')
            .then(lb => {              
                res.status(200).json(lb);                
            })
            .catch(err => res.status(400).json(err))
})        


module.exports = routes;
