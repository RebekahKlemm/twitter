const express = require('express');
const router = express.Router();
const fs = require('fs');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
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