let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let user = require('./routes/user');
let role = require('./routes/role');
let category = require('./routes/category');
let article = require('./routes/article');
let comment = require('./routes/comment');



//Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/user", user);
app.use("/category", category);
app.use("/article", article);
app.use("/role", role);
app.use("/comment", comment);


app.listen(9090);