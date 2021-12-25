const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const port = 3000;
/*==============================
        Mount Middleware
================================*/
app.use(express.urlencoded({extended: false}));


app.use(express.static('public'));
/*============================
        ROUTES
==============================*/

// INDEX//
app.get('/pokemon/', (req, res) => {
 res.render('index.ejs', { 
   data: pokemon 
    })
});

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
     pokemon: data[req.params.id],
     index: req.params.id,   
    })
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    //res.send(pokemon[req.params.id]);
res.render('show.ejs', { 
    pokemon: pokemon[req.params.id],
    title: `${pokemon[req.params.id].name}` });
});

/*========================
        Listening
===========================*/
app.listen(port, () => {
    console.log(`listening on port`, port)
});

