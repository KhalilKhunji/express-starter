// Imports
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || '3000'; // Setting server port - defaults to 3000 if unspecified in .env

const catsRouter = require('./routes/cats.js');

// Add any imports at the top of the file

// Middleware
app.use(morgan('dev')); // For logging HTTP requests
app.use(express.json()); // For parsing JSON payloads

// Add any additional middleware here (order of middleware matters)

// Routes
app.use('/cats', catsRouter);

// Add any additional routes here


// Server running - keep at the bottom of the file
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});