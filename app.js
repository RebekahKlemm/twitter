const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
//const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

//res.render( 'index', {title: 'Hall of Fame', people: people} );

var locals = {
    title: "An Example",
    people: [
        {name: 'Gandalf'},
        {name: 'Frodo'},
        {name: 'Hermione'},
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//nunjucks.configure('views'); // point nunjucks to the proper directory for templates


nunjucks.configure('views', {noCache: true});



app.listen(3000);
console.log('server listening');

app.use('/', function (req, res, next) {
    res.send(nunjucks.render('index.html', locals));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})



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
        console.log(daniel);
        response.send(daniel);
  
    //response.send('hello world');
})

app.get('/news', function (request, response) {
    response.send('this is the news page');
})