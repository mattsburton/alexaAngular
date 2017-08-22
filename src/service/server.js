// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    //var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var quoteroute = require('./routes/quotes');
    //var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    //var uri = 'mongodb://mattb:mrbarbie9@cluster0-shard-00-00-bwu5m.mongodb.net:27017,cluster0-shard-00-01-bwu5m.mongodb.net:27017,cluster0-shard-00-02-bwu5m.mongodb.net:27017/quotes?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
    var uri = 'mongodb://localhost/timeline-app';



    mongoose.connect(uri, function(error) {
      // if error is truthy, the initial connection failed.
      console.log(error);
    })

   // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    //app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    //app.use(methodOverride());
    app.use('/', quoteroute); //This is our route middleware






    // listen (start app with node server.js) ======================================
    app.listen(4100);
    console.log("App listening on port 4100");
