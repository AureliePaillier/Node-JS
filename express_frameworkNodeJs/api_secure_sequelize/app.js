const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const user = require('./routes/user.route');

//Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/users", user);


app.listen(9090);