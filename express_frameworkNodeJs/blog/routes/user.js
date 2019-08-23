let express = require('express');
let router = express.Router();
let db = require(`../models/index.js`);
let multer = require('multer');

//CRYPTAGE
const bcrypt = require('bcrypt');
const saltRounds = 10;

///////////////////////// TOKEN
const jwt = require('jsonwebtoken');
//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}
////////////////// Creation AVATAR ///////////////////////////////////////////
app.post('/avatar', upload.single('avatar'), function (req, res, next) {
    //avatar est le nom de l input file
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json(req.file);
  })

///////////////// List users //////////////////////////////////////////////
router.get('/',(req,res)=>{
    db.User.findAll({})
    .then(users=>{
        res.setHeader('Content-type','application/json ; charset=utf-8');
        res.status(200);
        res.json(users);
        res.end();
    })
    .catch(error=>{
        res.json(error);
        res.end();
    })
})

// Creation d un user
router.post('/create',(req,res)=>{
    bcrypt.hash(req.body.pass, saltRounds, function(err, hash) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            login: req.body.login,
            pass: hash,
            roleId: req.body.roleId
        })
        .then(user=>{
            res.status(200)
            res.json(user)
            res.end();
        })
        .catch(error=>{
            res.status(500);
            res.json(error);
        })
    });
})

//LOGIN
router.post('/login',(req,res)=>{
    db.User.findOne({
        where:{
            login: req.body.login
        }
    })
    .then(user=>{
        if(!user){
            res.status(400);
            res.json({'message':'KO'});
            res.end();
        }
        bcrypt.compare(req.body.pass, user.pass, function(err,result) {
            if(result){
                //Creation du token
                jwt.sign({user}, 'clemagique', { expiresIn: '1h' },(err, token) => {
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
})

// ROUTE PROTEGEE
router.get('/data', checkToken, (req, res) => {
    // verify the JWT token generated for the user
    jwt.verify(req.token, 'clemagique', (err, authorizedData) => {
        if(err){
            // If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            // If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful log in',
                authorizedData
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
});


module.exports = router;