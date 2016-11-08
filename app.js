const express = require('express');
const volleyball = require('volleyball');
const app = express(); // creates an instance of an express application


app.listen(3000);
console.log('server listening');

// app.use(function (req, res, next) {
//     req.get('/', function(request, response, next){
//         console.log('You are in reqGet');
//     });
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     next();
// })

app.use(volleyball);


app.use(function (req, res, next) {
    console.log('request');
    next();
})

app.use('/special/', function (req, res, next) {
    console.log('you are in special');
    next();
})

app.post('/modernism', function (request, response) {
    console.log('we are posting!');
})

app.get('/', function (request, response) {
    response.send('hello world');
})

app.get('/news', function (request, response) {
    response.send('this is the news page');
})