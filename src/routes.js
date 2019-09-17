const express = require('express');
const db = require('./db');

const routes = express.Router();

const PropertyController = require('./controllers/PropertyController');
const UserController = require('./controllers/UserController');
const PhotosController = require('./controllers/PhotosController');

// User requests

routes.put('/user/:id', (req, res) => { UserController.updateUser(req, res, db); });
routes.get('/user/:id', (req, res) => { UserController.getUser(req, res, db); });
routes.post('/user', (req, res) => { UserController.newUser(req, res, db); });
routes.delete('/user/:id', (req, res) => { UserController.removeUser(req, res, db); });

// Property requests

module.exports = routes;
