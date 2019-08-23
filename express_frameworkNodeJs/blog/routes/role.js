let express = require('express');
let router = express.Router();
let db = require(`../models/index.js`);


//List
router.get('/',(req,res)=>{
    db.Role.findAll({})
    .then(roles=>{
        res.setHeader('Content-type','application/json ; charset=utf-8');
        res.status(200);
        res.json(roles);
        res.end();
    })
    .catch(error=>{
        res.json(error);
        res.end();
    })
})

//Creation Role
router.post('/create',(req,res)=>{
    db.Role.create({
        name: req.body.name
    })
    .then(role=>{
        res.status(200);
        res.json(role);
    })
    .catch((error)=>{
        res.status(400);
        res.json(error);
    })
})


module.exports = router;