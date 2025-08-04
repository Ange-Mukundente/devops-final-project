const express = require('express');
const path = require('path');

// Create and configure the Express application
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Look for views in ./src/views

// Define the root route
app.get('/', (req, res) => {
    res.render('index', { message: "The Pipeline is Working!!" });
});

// Export the app logic so it can be used by tests OR our server.js
module.exports = app;
