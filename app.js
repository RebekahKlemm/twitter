const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application

//one way to do it, put it all inside one single object (title and people array of objects)
var locals = {
    title: "An Example",
    people: [
        {name: 'Gandalf'},
        {name: 'Frodo'},
        {name: 'Hermione'},
    ]
};

//second way to do it, split up the title and people array of objects
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});  // point nunjucks to the proper directory for templates


app.listen(3000);
console.log('server listening');

app.use(volleyball);

app.get('/', function (req, res, next) {
    res.send(nunjucks.render('index.html', locals))
});

app.get('/hall', function (request, response) {
    response.send(nunjucks.render( 'index.html', {title: 'Hall of Fame', people: people} ));
});

app.post('/posting', function (request, response) {
    console.log('we are posting!');
});

app.put('/putting', function (request, response) {
    console.log('we are putting!');
});

app.delete('/deleting', function (request, response) {
    console.log('we are deleting!');
});

