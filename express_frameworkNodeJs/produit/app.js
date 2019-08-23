let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let user = require('./routes/user');
let role = require('./routes/role');
let produit = require('./routes/produit');

//Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/user", user);
app.use("/role", role);
app.use("/produit", produit);

app.listen(9090);