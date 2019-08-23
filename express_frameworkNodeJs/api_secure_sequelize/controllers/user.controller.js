const User = require('../models/user.model');
let db = require(`../models/index`);


const private = "MI@EowIBA/KCAQE&sHGwYrXkk1cImL!vF3cJL!Y6pvfDLhvZBh";


//CRYPTAGE
const bcrypt = require('bcrypt');
const saltRounds = 10;

//TOKEN
const jwt = require('jsonwebtoken');

exports.user_list = function(req,res){
    db.User.findAll({})
        .then(users=>{
            res.status(200);
            res.json(users)
        })
        .catch(error=>{
            res.status(400);
            res.json(error);
    })
}

//CREATE
exports.user_add = function(req,res){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: hash,
            avatar: null
        })
        .then(user=>{
            console.log(hash)
            res.status(200)
            res.json(user)
            res.end();
        })
        .catch(error=>{
            res.status(500);
            res.json(error);
        })
    });
}

//LOGIN
exports.user_login = (req,res)=>{
    db.User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            res.status(400);
            res.json({'message':'KO'});
            res.end();
        }
        bcrypt.compare(req.body.password, user.password, function(err,result) {
            if(result){
                //Creation du token
                jwt.sign({user}, private, { expiresIn: '1h' },(err, token) => {
                    if(err) { console.log(err) }    
                    res.json(token);
                });
            }
            else{
                res.status(400);
                res.json({'message':'T es malaaaddeee'});
                res.end(); 
            }
        });
    })
}

//DELETE
exports.user_delete = function(req,res){
    jwt.verify(req.token, private, (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('Vous n\'avez pas les droits desole');
            res.sendStatus(403);
        } else {
                db.User.destroy({
                    where:{
                        id: req.params.id
                    }
                })
                .then(result=>{
                    res.json('User deleted');
                    if(authorizedData.user.id == req.params.id){
                        
                    }
                })
                .catch(error=>{
                    res.json(error);
                })
            }
        })
}
