const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const res = require("express/lib/response");
const methodOverride = require('method-override');
const port = 3000;
/*==============================
        Mount Middleware
================================*/
app.use(express.urlencoded({extended: false}));


app.use(express.static('public'));
app.use(methodOverride('_method'));

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
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
});
//DELETE
app.delete('/pokemon/:id',(req,res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});
//UPDATE
app.put('/pokemon/:id', (req,res) => {
   pokemon[req.params.id] = req.body;
   res.redirect('/pokemon');
});
//CREATE
app.post("/pokemon", (req,res) => {
   pokemon.push(req.body);
   res.redirect('/pokemon') 
});
//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
     pokemon: pokemon[req.params.id],
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

