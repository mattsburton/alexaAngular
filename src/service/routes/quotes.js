var quote = require('../models/quotes');
var express = require('express');
var router = express.Router();

// routes ======================================================================

  // api ---------------------------------------------------------------------
  // get all todos
  router.get('/api/getQuotes', function(req, res, data) {
      // use mongoose to get all todos in the database
      quote.find(function(err, quotes) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
              res.send(err)

          res.json(quotes); // return all todos in JSON format
      });
  });

  router.get('/api/getSingle/:_id', function(req, res, data) {
      // use mongoose to get all todos in the database
      quote.findOne({_id:  req.params._id }, function(err,obj) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
              res.send(err)

          res.json(obj); // return all todos in JSON format
      })
    })

  //
  // router.post('/api/bibliography', (req, res, data) => {
  //   var newBibliography = bibliography({
  //     description : 'Description',
  //     author : 'Matt B',
  //     journal : 'Garners World',
  //     shortyear :  '2017',
  //     link : 'http://www.google.co.uk',
  //     publishedBy : 'TOI'
  //   });
  //    newBibliography.save(function(err) {
  //      if (err) throw err;
  //    })
  //
  // })
  //
  //
  router.post('/api/updateBibliography', (req, res, data) => {
    //console.log(req.body.quote);
     quote.findOneAndUpdate({_id:  req.body._id},  {$set: {name: req.body.name, quote: req.body.quote  }}, (err) => {
       if (err) { console.log('an error occurred - deleted')}
     })
  })

  router.post('/api/add', (req, res, data) => {
    //console.log(req.body.quote);
     quote.create({name: req.body.name, quote: req.body.quote  }, (err) => {
       if (err) { console.log('an error occurred - deleted')}
     })
  })


  router.get('/api/delete/:_id', (req, res, data) => {
    var param = req.param("_id");
      //  console.log(param);
     quote.findOneAndRemove({_id: param}, (err) => {
       if (err) { console.log('an error occurred - deleted')}
     })
  })


module.exports = router;
