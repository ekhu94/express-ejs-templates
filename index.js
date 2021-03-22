const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
//! required one time each project
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render('random', { num })
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});