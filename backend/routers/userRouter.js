const express = require('express')
const router = express.Router();

router
    .post('/login',(req,res)=>{
        res.send('Login')
    })

    .post('/register',(req,res)=>{
        res.send('Register')
    })

module.exports = router;