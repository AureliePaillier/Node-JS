let express = require('express');
let router = express.Router();

//TOKEN
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

const user_controller = require('../controllers/user.controller');

// router.get('/',product_controller.home);
router.get('/list',user_controller.user_list);
router.post('/add',user_controller.user_add);
router.post('/login',user_controller.user_login);
router.delete('/delete/:id',checkToken, user_controller.user_delete);

module.exports = router;