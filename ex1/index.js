const express = require('express')
const { readFile } = require('fs');


const app = express()

app.get('/', function (req, res) {
    readFile('./crudBookShop.html', 'utf8', (err, html)=>{
        if(err)
        res.status(500).send("Error");
    res.send(html)
    })
});
app.get('/detail', function (req, res) {
    readFile('./fetchapi-detail.html', 'utf8', (err, html)=>{
        if(err)
        res.status(500).send("Error");
    res.send(html)
    })
});

app.listen(3000, ()=>{
    console.log("Your app is aviable on http://localhost:3000");
})