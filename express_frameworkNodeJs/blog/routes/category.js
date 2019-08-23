let express = require('express');
let router = express.Router();
let db = require(`../models/index.js`);


// Home page route.
router.get('/',(req,res)=>{
    db.Category.findAll({})
    .then(categories=>{
        res.setHeader('Content-type','application/json ; charset=utf-8');
        res.status(200);
        res.json(categories);
        res.end();
    })
    .catch(error=>{
        res.json(error);
        res.end();
    })
})

module.exports = router;