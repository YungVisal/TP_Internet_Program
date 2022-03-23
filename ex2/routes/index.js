const express = require('express');
const router = express.Router();

const { login } = require('../services/login');

const app = express();

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    const result = await login(email, password);

    //console.log(email, password);
    //res.send(req.body)
    res.json(result);
});

router.post('/register', function (req, res) {
    response.send("Hello from API in Detail")
});
module.exports = router;