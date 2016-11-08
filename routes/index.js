const express = require('express');
const router = express.Router();
const fs = require('fs');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( ['name', name] );
  // console.log(find(['content', 'loves Fullstack']));
  
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find( ['id', id]);

  // console.log(find(['content', 'loves Fullstack']));

  res.render( 'index', { tweets: list } );
});

// router.get('/stylesheets/style.css', function(req, res){
//   // fs.readFile('public/stylesheets/style.css', function(err, data) {
//   //   res.setHeader('Content-Type', 'text/css');
//   //   res.send(data);
//   // })
//   console.log(process.cwd() );
//   res.sendFile(process.cwd() + '/public/stylesheets/style.css');
// })

module.exports = router;