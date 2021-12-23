const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const port = 3000;
/*==============================
        Mount Middleware
================================*/

/*============================
        ROUTES
==============================*/

// INDEX//
app.get('/pokemon/', (req, res) => {
// res.render('index.ejs', { 
    res.send(pokemon);
//     data: pokemon 
//     })
});

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT


// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});

/*========================
        Listening
===========================*/
app.listen(port, () => {
    console.log(`listening on port`, port)
});


