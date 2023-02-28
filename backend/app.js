const express = require('express');
const app = express();


//middlewares

app.use(express.json());

//




//routes
const authRouter = require('./routers/authRouter');


app.use('/auth', authRouter);


//



module.exports = app;