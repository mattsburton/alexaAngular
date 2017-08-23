
    var quoteroute = require('./routes/quotes');
    // Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
    var mongoose = require('mongoose');

// Get our API routes
const api = require('./routes/quotes');

const app = express();
var uri = 'mongodb://localhost/timeline-app';



mongoose.connect(uri, function(error) {
  // if error is truthy, the initial connection failed.
  console.log(error);
})

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes

app.use('/', quoteroute); //This is our route middleware

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
