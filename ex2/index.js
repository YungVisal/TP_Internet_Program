const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(require('./routes'));
app.listen(3001, ()=>console.log("Your app is aviable on http://localhost:3001"))
