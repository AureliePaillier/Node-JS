let express = require('express');
let router = express.Router();
let db = require(`../models/index.js`);

////////// Home page route /////////////////////////
router.get('/',(req, res)=>{
    db.Produit.findAll({})
    .then(produits=>{
        res.setHeader('Content-type','application/json ; charset=utf-8');
        res.status(200);
        res.json(produits);
        res.end();
    })
    .catch(error=>{
        res.json(error);
        res.end();
    })
})

///////// READ ROUTE PRODUIT tjs avc GET //////////////
router.get('/read',function(req,res){
    db.Produit.read({
        name: req.body.name,      
        prix: req.body.prix,
        photo: req.body.photo,
        description: req.body.description
    })
    .then(Produit=>{
        res.status(200);
        res.json(Produit);
    })
    .catch((error)=>{
        res.status(400);
        res.json(error);
    })
});

/*///////// CREATE ROUTE PRODUIT tjs avc POST //////////////
router.post('/create',(req,res)=>{
    db.Produit.create({
        name: req.body.name,      
        prix: req.body.prix,
        photo: req.body.photo,
        description: req.body.description
    })
    .then(Produit=>{
        res.status(200);
        res.json(Produit);
    })
    .catch((error)=>{
        res.status(400);
        res.json(error);
    })
})

///////// UPDATE ROUTE PRODUIT tjs avc PUT //////////////
router.put('/update',(req,res)=>{
    db.Produit.update({
        name: req.body.name,      
        prix: req.body.prix,
        photo: req.body.photo,
        description: req.body.description
    })
    .then(Produit=>{
        res.status(200);
        res.json(Produit);
    })
    .catch((error)=>{
        res.status(400);
        res.json(error);
    })
})

///////// DELETE ROUTE PRODUIT tjs avc DELETE //////////////
router.delete('/delete',(req,res)=>{
    db.Produit.delete({
        name: req.body.name,      
        prix: req.body.prix,
        photo: req.body.photo,
        description: req.body.description
    })
    .then(Produit=>{
        res.status(200);
        res.json(Produit);
    })
    .catch((error)=>{
        res.status(400);
        res.json(error);
    })
})*/

module.exports = router;