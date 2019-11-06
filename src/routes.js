const express = require('express');
const db = require('./db');

const routes = express.Router();

const User = require('./controllers/UserController');

const Neighborhood = require('./controllers/NeighborhoodController');

const Property = require('./controllers/PropertyController');

const PropertyInfo = require('./controllers/PropertyInfoController');
const PropertyType = require('./controllers/PropertyTypeController');
const PropertyDetails = require('./controllers/PropertyDetailsController');
const PropertyFeatures = require('./controllers/PropertyFeaturesController');

const PropertyPhotos = require('./controllers/PropertyPhotosController');


// User requests
routes.get('/user/:id', (req, res) => { User.Get(req, res, db); });
routes.put('/user/:id', (req, res) => { User.Update(req, res, db); });
routes.post('/registeruser', (req, res) => { User.Add(req, res, db); });
routes.delete('/user/:id', (req, res) => { User.Remove(req, res, db); });
routes.post('/user', (req, res) => { User.Get(req, res, db); });

// PropertyInfo requests
routes.get('/property/info/:id', (req, res) => { PropertyInfo.Get(req, res, db); });
routes.put('/property/info/:id', (req, res) => { PropertyInfo.Update(req, res, db); });
routes.post('/property/info', (req, res) => { PropertyInfo.Add(req, res, db); });
routes.delete('/property/info/:id', (req, res) => { PropertyInfo.Remove(req, res, db); });
routes.get('/property/info/setvisibility/:id&:status', (req, res) => { PropertyInfo.setVisibility(req, res, db); });
// PropertyDetail requests
routes.post('/property/details', (req, res) => { PropertyDetails.Add(req, res, db); });

// PropertyFeatures requests
routes.post('/property/features', (req, res) => { PropertyFeatures.Add(req, res, db); });

// Photos Controller
routes.post('/sign_s3', (req, res) => { PropertyPhotos.signS3(req, res); });
routes.post('/property/photos', (req, res) => { PropertyPhotos.Add(req, res, db); });
routes.get('/property/photos/:id', (req, res) => { PropertyPhotos.Get(req, res, db); });
routes.delete('/property/photos/:id', (req, res) => { PropertyPhotos.Remove(req, res, db); });

// Property requests
routes.get('/property/:id', (req, res) => { Property.Get(req, res, db); });
routes.put('/property/:id', (req, res) => { Property.Update(req, res, db); });
routes.get('/property', (req, res) => { Property.GetAll(req, res, db); });
routes.post('/property', (req, res) => { Property.Add(req, res, db); });
routes.delete('/property/:id', (req, res) => { Property.Remove(req, res, db); });


// Neighborhood requests
routes.get('/neighborhood', (req, res) => { Neighborhood.List(req, res, db); });

// Property type requests
routes.get('/typeofproperty', (req, res) => { PropertyType.List(req, res, db); });


module.exports = routes;
