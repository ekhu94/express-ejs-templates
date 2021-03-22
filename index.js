const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Template time!');
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});