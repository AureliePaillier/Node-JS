let express = require('express');
let router = express.Router();
let db = require(`../models/index.js`);

// Home page comment.
router.get('/',(req,res)=>{
    db.Comment.findAll({})
    .then(comments=>{
        res.setHeader('Content-type','application/json ; charset=utf-8');
        res.status(200);
        res.json(comments);
        res.end();
    })
    .catch(error=>{
        res.json(error);
        res.end();
    })
})

module.exports = router;