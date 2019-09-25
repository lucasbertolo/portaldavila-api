const express = require('express');
const db = require('./db');

const routes = express.Router();

const PropertyController = require('./controllers/PropertyController');
const UserController = require('./controllers/UserController');
const GeneralController = require('./controllers/GeneralController');
// const PhotosController = require('./controllers/PhotosController');


// User requests
routes.get('/user/:id', (req, res) => { UserController.getUser(req, res, db); });

routes.put('/user/:id', (req, res) => { UserController.updateUser(req, res, db); });

routes.post('/user', (req, res) => { UserController.newUser(req, res, db); });

routes.delete('/user/:id', (req, res) => { UserController.removeUser(req, res, db); });

// Property requests
routes.get('/property/:id', (req, res) => { PropertyController.getProperty(req, res, db); });

routes.get('/property', (req, res) => { PropertyController.getAllProperty(req, res, db); });

routes.put('/property/:id', (req, res) => { PropertyController.updateProperty(req, res, db); });

routes.post('/property', (req, res) => { PropertyController.newProperty(req, res, db); });

routes.delete('/property/:id', (req, res) => { PropertyController.removeProperty(req, res, db); });

// Photos Controller


// General Controller
routes.get('/neighborhood/', (req, res) => { GeneralController.listNeighborhood(req, res, db); });

routes.get('/typeproperty', (req, res) => { GeneralController.listTypeProperty(req, res, db); });

module.exports = routes;
