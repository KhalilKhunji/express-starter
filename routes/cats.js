const express = require('express');
const Router = express.Router();

// Importing functions (i.e. controllers) for the routes
const { catIndex, catShow, catCreate, catUpdate, catDelete } = require('../controllers/cats.js');

// Routes
Router.get('/', catIndex);
Router.get('/:catId', catShow);
Router.post('/', catCreate);
Router.put('/:catId', catUpdate);
Router.delete('/:catId', catDelete);

module.exports = Router;