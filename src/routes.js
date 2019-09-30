const express = require('express');
const db = require('./db');

const routes = express.Router();

const Property = require('./controllers/PropertyController');
const User = require('./controllers/UserController');
const Neighborhood = require('./controllers/NeighborhoodController');
const PropertyType = require('./controllers/PropertyTypeController');
const PropertyDetails = require('./controllers/PropertyDetailsController');

// const PhotosController = require('./controllers/PhotosController');


// User requests
routes.get('/user/:id', (req, res) => { User.Get(req, res, db); });
routes.put('/user/:id', (req, res) => { User.Update(req, res, db); });
routes.post('/user', (req, res) => { User.Add(req, res, db); });
routes.delete('/user/:id', (req, res) => { User.Remove(req, res, db); });

// Property requests
routes.get('/property/:id', (req, res) => { Property.Get(req, res, db); });
routes.get('/property', (req, res) => { Property.GetAll(req, res, db); });
routes.put('/property/:id', (req, res) => { Property.Update(req, res, db); });
routes.post('/property', (req, res) => { Property.Add(req, res, db); });
routes.delete('/property/:id', (req, res) => { Property.Remove(req, res, db); });

// PropertyDetail requests
routes.post('/details', (req, res) => { PropertyDetails.Add(req, res, db); });
// Photos Controller


// Neighborhood requests
routes.get('/neighborhood/', (req, res) => { Neighborhood.List(req, res, db); });

// Property type requests
routes.get('/typeproperty', (req, res) => { PropertyType.List(req, res, db); });


module.exports = routes;
