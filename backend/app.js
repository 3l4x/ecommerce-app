const express = require('express');
const app = express();


//middlewares
app.use(express.json());


//routes
const userRouter = require('./routers/userRouter');



app.use('/user', userRouter);






module.exports = app;